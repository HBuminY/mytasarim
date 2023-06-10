<script>
    //div for holding/displaying content (can be sliced into 2 content divs)


    //IMPORTING COMPONENTS AND SVELTE FUNCTIONS
    import { onMount } from "svelte";
    import Slicer from "./slicer.svelte";
    import { get_current_component } from "svelte/internal";
    
    //SUBSCRIBING STORES
    import { toolOptions, conDivStruct } from "./stores";
    const ID = `contentDiv_${$conDivStruct.divcounter}`

    conDivStruct.newdiv();
    conDivStruct.addDiv2List(ID);

    //DECLERATION OF GENERAL VARIABLES
    const THIS = get_current_component();
    export let BASIS=100;

    let conDiv;
    let conDivSize={
        width:0,
        height:0
    };

    //CALCULATING/UPDATING THE DIV DIRECTION (portrait / landscape)
    let direction=true // true: portrait, false: landscape

    function updateDirection(){
        let dh = conDiv.offsetHeight
        let dw = conDiv.offsetWidth
        let aspRatio = dh/dw;
        
        direction = aspRatio>=1 //greater than 1 means its portrait
    };
    onMount(()=>{ updateDirection(); });
    $:{conDivSize; if(conDiv){updateDirection();};} //update direction on size change


    //SLICING ACTION
    let slicingThisDiv;
    let isSliced = false;

    let mousePos;
    let divBounds = { left: 0, top: 0, width: 0, height: 0 };    

    function slicingHandle(e){ //the mouse pos handling / scaling was done by gpt3
        if($toolOptions.sliceMode&&!isSliced){
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
                y: Math.round(offsetY * scaleY)
            };
        }
    };

    let sliced1stbasis; //gonna need a better name
    function slice(){
        if($toolOptions.sliceMode&&!isSliced){
            let pivot = direction?mousePos.y:mousePos.x;
            let boxLen = direction?conDiv.offsetHeight:conDiv.offsetWidth;

            sliced1stbasis=pivot/boxLen*100;
            isSliced=true;
        };
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div 
    class="
        relative {isSliced?"bg-opacity-0":"bg-slate-200 border"} flex border-black gap-5
        {direction?'flex-col':'flex-row'}
    "
    style="flex-basis: {BASIS}%;"

    
    bind:this={conDiv} bind:offsetWidth={conDivSize.width} bind:offsetHeight={conDivSize.height}
    on:mouseleave={()=>{slicingThisDiv=false;}}
    on:mousemove={slicingHandle}
    on:click={slice}
>
    {#if isSliced}
        <svelte:self BASIS={sliced1stbasis}/>
        <svelte:self BASIS={100-sliced1stbasis}/>
    {:else}
        <slot/>
    {/if}




    {#if false}
    <div class="absolute left-1/2 top-1/2 text-center -translate-x-1/2">
        div:contentDiv
        <br> 
        {direction}
        <br>
        mouseAxis:{JSON.stringify(mousePos)}
    </div>
    {/if}

    {#if slicingThisDiv&&!isSliced}
        <Slicer {direction} bind:mousePos/>
    {/if}
</div>