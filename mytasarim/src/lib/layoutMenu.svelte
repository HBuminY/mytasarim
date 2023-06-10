<script>
    import { toolOptions, conDivStruct } from "./stores";
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

    <div class="max-h-[30vh] w-full overflow-auto">
        <ul>
            {#each $conDivStruct.divlist as {id}}
            <li class="border border-black">
                <span>id:{id}</span>
                <button class="button">delete</button>
            </li>
            {/each}
        </ul>
    </div>
</div>