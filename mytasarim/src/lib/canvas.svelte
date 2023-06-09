<script>
    import panzoom from 'panzoom'
    import { onMount } from "svelte";
    import { toolOptions } from './stores';
    
    export let canvasOptions;
    export let canvasDiv;
    let panzoomInstance;

    function updateCanvasDiv(){
        canvasDiv.style.width=`${canvasOptions.width}px`;
        canvasDiv.style.height=`${canvasOptions.height}px`;
    };

    function keyboardHandle(event){
        //console.log(event);
        if(event.code==='Space'){
            panzoomInstance.zoomTo(0,0,1);
            panzoomInstance.moveTo(0,0);
            //console.log(panzoomInstance);
        };
    };

    onMount(()=>{
        updateCanvasDiv();
        panzoomInstance=panzoom(canvasDiv, {
            smoothScroll:false
        });
    });

    $:{
        if(canvasOptions&&canvasDiv){
            updateCanvasDiv()
        };

        if(panzoomInstance){
            if($toolOptions.sliceMode){
                panzoomInstance.pause();
            }else{
                panzoomInstance.resume();
            }
        }
    };
</script>

<svelte:window on:keydown={keyboardHandle}/>

<div 
    class="absolute bg-gray-50 shadow-xl origin-center cursor-grab"
    bind:this={canvasDiv}
>
    <slot/>
</div>