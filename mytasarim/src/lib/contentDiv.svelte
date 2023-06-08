<script>
    //div for holding/displaying content (can be sliced into 2 content divs)

    import { onMount, onDestroy } from "svelte";
    import { toolOptions } from "./stores";
    import Slicer from "./slicer.svelte";
    import LayoutDiv from "./layoutDiv.svelte";
    import { get_current_component } from "svelte/internal";

    let conDiv;
    let direction=true // true: portrait, false: landscape

    let conDivSize={
        width:0,
        height:0
    };

    function updateDirection(){
        let ldh = conDiv.offsetHeight
        let ldw = conDiv.offsetWidth
        let aspRatio = ldh/ldw;
        
        direction = aspRatio>=1
    }

    let THIS = get_current_component();
    onMount(()=>{
        updateDirection();
    });

    $:{
        conDivSize; if(conDiv){updateDirection();};
    }

    //-----------------

    let slicingThisDiv;
    let mousePos;
    let divBounds = { left: 0, top: 0, width: 0, height: 0 };

    function slicingHandle(e){ //the mouse pos handling / scaling was done by gpt3
        if($toolOptions.sliceMode){
            updateDirection()
            slicingThisDiv=true;

            const { left, top, width, height } = conDiv.getBoundingClientRect();

            if (
                divBounds.left !== left ||
                divBounds.top !== top ||
                divBounds.width !== width ||
                divBounds.height !== height
            ) {
                divBounds = { left, top, width, height };
            }

            const scaleX = conDiv.offsetWidth / divBounds.width;
            const scaleY = conDiv.offsetHeight / divBounds.height;
            const offsetX = e.clientX - divBounds.left;
            const offsetY = e.clientY - divBounds.top;

            mousePos = {
                x: Math.round(offsetX * scaleX),
                y: Math.round(offsetY * scaleY),
                boxWidth:divBounds.width,
                bowHeight:divBounds.height
            };
        }
    };

    function slice(){
        if($toolOptions.sliceMode){
            let ratio=direction?(mousePos.boxHeight/mousePos.y):(mousePos.boxWidth/mousePos.x);

            let parent = conDiv.parentElement;
            let newLayoutDiv = new LayoutDiv({
                target:parent,
                props:{
                    ratio:ratio
                }
            });
            THIS.$destroy();
        }
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div 
    class="flex-grow bg-slate-200 flex {direction?'flex-col':'flex-row'}"
    bind:this={conDiv} bind:offsetWidth={conDivSize.width} bind:offsetHeight={conDivSize.height}
    on:mouseleave={()=>{slicingThisDiv=false;}}
    on:mousemove={slicingHandle}
    on:click={slice}
>
    {#if $toolOptions.devmode}
        div:contentDiv <br> mouseAxis:
        {JSON.stringify(mousePos)}
    {/if}

    {#if slicingThisDiv}
        <Slicer {direction} bind:mousePos/>
    {/if}
</div>