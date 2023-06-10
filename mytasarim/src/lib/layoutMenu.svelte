<script>
    import { toolOptions, conDivStruct } from "./stores";

    let divlist=[];
    $:{divlist = $conDivStruct.divlist}
</script>
    
<div>
    
    <button 
        class="button w-full"
        on:click|preventDefault={()=>{
            $toolOptions.sliceMode=!$toolOptions.sliceMode
        }}
    >
        Slice Mode : {$toolOptions.sliceMode}
    </button>

    <button 
        class="button w-full bg-red-300"
        on:click|preventDefault={()=>{
            console.log($conDivStruct.divlist);
        }}
    >
        bruh
    </button>

    <div class="max-h-[30vh] w-full overflow-auto">
        <ul>
            {#each divlist as {id, compRef} (id)}
            {#if id!=="contentDiv_0"}
                <li class="border border-black">
                    <span>id:{id}</span>
                    <button class="button" on:click|preventDefault={()=>{compRef.$destroy();}}>delete</button>
                </li>
            {/if}
            {/each}
        </ul>
    </div>
</div>