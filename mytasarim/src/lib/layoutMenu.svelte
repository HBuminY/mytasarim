<script>
    import { toolOptions } from "./stores";

    let laytouts=[
        {
            name:"test1"
        },
        {
            name:"test2"
        },
    ];
</script>
    
<div>
    
    <button 
        class="button block"
        on:click|preventDefault={()=>{
            $toolOptions.sliceMode=!$toolOptions.sliceMode
        }}
    >
        Slice Mode : {$toolOptions.sliceMode}
    </button>

    <ul>
        {#each laytouts as layout}
        <li class="border border-black">
            <span>Name:{layout.name}</span>
            <button class="button">delete</button>
        </li>
        {/each}
    </ul>
</div>