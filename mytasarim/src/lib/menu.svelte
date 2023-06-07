<script>
    import HorizontalResizer from "./horizontalResizer.svelte";
    import { onMount } from "svelte";

    let ww = window.innerWidth; // window width
    let wh = window.innerHeight; // window height

    let rightBorderResize;
    let container;
    let conWidth;

    onMount(()=>{
        conWidth=container.offsetWidth;
    });

    function clamp(num, min, max){
        return Math.min(Math.max(num, min), max)
    };

    let newWidth;
    $: newWidth = conWidth+rightBorderResize;
</script>

<div 
    class="relative min-w-min w-1/6 shrink-0 bg-red-300 z-30 p-4 flex flex-col gap-4"
    style="width: {clamp(newWidth,ww/6,ww/3)}px;"

    bind:this={container}
>
    <slot/>

    <HorizontalResizer bind:diff={rightBorderResize} doOnMouseUp={()=>{conWidth=container.offsetWidth}}/>
</div>