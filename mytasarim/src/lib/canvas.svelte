<script>
    import panzoom from 'panzoom'
    import { onMount } from "svelte";
    import { toolOptions, panzoomInstance } from './stores';
    
    export let canvasOptions;
    export let canvasDiv;

    function updateCanvasDiv(){
        canvasDiv.style.width=`${canvasOptions.width}px`;
        canvasDiv.style.height=`${canvasOptions.height}px`;
    };

    function keyboardHandle(event){
        //console.log(event);
        if(event.code==='Space'){
            $panzoomInstance.zoomTo(0,0,1);
            $panzoomInstance.moveTo(0,0);
            //console.log($panzoomInstance);
        };
    };

    onMount(()=>{
        updateCanvasDiv();
        $panzoomInstance=panzoom(canvasDiv, {
            smoothScroll:false
        });
    });

    $:{
        if(canvasOptions&&canvasDiv){
            updateCanvasDiv()
        };

        /* this prevents the pan and zoom functionalities when slicing
        if($panzoomInstance){
            if($toolOptions.sliceMode){
                $panzoomInstance.pause();
            }else{
                $panzoomInstance.resume();
            }
        }
        */
    };
</script>

<svelte:window on:keydown={keyboardHandle}/>

<div 
    class="absolute bg-white shadow-xl origin-center {$toolOptions.sliceMode?'cursor-crosshair':'cursor-grab'}"
    bind:this={canvasDiv}
>
    <slot/>
</div>