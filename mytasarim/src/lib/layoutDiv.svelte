<script>
    import { onMount } from "svelte";
    import { toolOptions } from "./stores";
    import Slicer from "./slicer.svelte";

    let layDiv;
    let direction=true // true: portrait, false: lanscape

    function updateDirection(){
        let ldh = layDiv.offsetHeight
        let ldw = layDiv.offsetWidth
        let aspRatio = ldh/ldw;

        console.log(ldh,ldw,aspRatio);
        direction = aspRatio>=1
    }

    onMount(()=>{
        updateDirection();
    });

    //-----------------

    let slicingThisDiv;
    let mousePos;
    let divBounds = { left: 0, top: 0, width: 0, height: 0 };

    function slicingHandle(e){ //ik its spelled with a "c"
        if($toolOptions.sliceMode){
            updateDirection()
            slicingThisDiv=true;

            const { left, top, width, height } = layDiv.getBoundingClientRect();

            if (
                divBounds.left !== left ||
                divBounds.top !== top ||
                divBounds.width !== width ||
                divBounds.height !== height
            ) {
                divBounds = { left, top, width, height };
            }

            const scaleX = layDiv.offsetWidth / divBounds.width;
            const scaleY = layDiv.offsetHeight / divBounds.height;
            const offsetX = e.clientX - divBounds.left;
            const offsetY = e.clientY - divBounds.top;

            mousePos = {
                x: offsetX * scaleX,
                y: offsetY * scaleY
            };
        }
    };

</script>

<div 
    class="w-full h-full bg-red-600 bg-opacity-30 flex {direction?'flex-col':'flex-row'}"
    bind:this={layDiv}
    on:mouseleave={()=>{slicingThisDiv=false;}}
    on:mousemove={slicingHandle}
>
    {JSON.stringify(mousePos)}

    {#if slicingThisDiv}
        <Slicer {direction} bind:mousePos/>
    {/if}
</div>