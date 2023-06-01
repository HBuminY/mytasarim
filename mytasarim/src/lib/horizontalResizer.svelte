<script>
    import { mousePos } from "./stores";

    let resizing=false;
    let startX;

    export let diff=0;
    export let doOnMouseUp = ()=>{};

    function startResize(event){
        resizing=true;
        startX=event.x;
    };

    function stopResize(event){
        resizing=false
        diff=0;
        doOnMouseUp();
    };

    $:{
        if(resizing){
            diff=$mousePos[0]-startX;
        };
    };
</script>

<svelte:body on:mouseup={stopResize}/>

<div 
        class="absolute h-[10%] w-1 bg-red-950 hover:bg-red-700 right-0 top-1/2 -translate-y-1/2 translate-x-1/2 cursor-grab"
        on:mousedown={startResize}
    >
</div>