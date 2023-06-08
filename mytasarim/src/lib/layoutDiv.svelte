<script>
    import ContentDiv from "./contentDiv.svelte";
    import { onMount } from "svelte";

    export let ratio=1;

    let direction;
    let layDiv;

    let layDivSize={
        width:0,
        height:0
    };

    $:{
        layDivSize; if(layDiv){updateDirection();};
    }

    function updateDirection(){
        let ldh = layDiv.offsetHeight
        let ldw = layDiv.offsetWidth
        let aspRatio = ldh/ldw;
        
        direction = aspRatio>=1
    };

    onMount(()=>{
        updateDirection();
    });
</script>


<div 
    class="flex-grow bg-slate-200 flex {direction?'flex-col':'flex-row'}"
    bind:this={layDiv} bind:offsetWidth={layDivSize.width} bind:offsetHeight={layDivSize.height}
    >

    <ContentDiv/>
    <ContentDiv/>
</div>