<script>
    import HorizontalResizer from "./horizontalResizer.svelte";
    import { onMount } from "svelte";

    let rightBorderResize;
    let container;
    let conWidth;

    onMount(()=>{
        conWidth=container.offsetWidth;
    });
</script>

<div 
    class="relative w-1/4 shrink-0 bg-red-300 z-30"
    style="width: {conWidth+rightBorderResize}px;"

    bind:this={container}
>
    <slot/>

    <HorizontalResizer bind:diff={rightBorderResize} doOnMouseUp={()=>{conWidth=container.offsetWidth}}/>
</div>