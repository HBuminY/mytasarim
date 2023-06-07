<script>
    let showMenu=true;
</script>

<div 
    class="bg-pink-100 rounded-md p-2"
>
        <h1 class="text-center">
            <slot name="title"/>
            <span>
                <button class="float-right button" on:click={()=>{showMenu=!showMenu}}>
                    {showMenu?"hide":"show"}
                </button>
            </span>
        </h1>
    

    {#if showMenu}
    <slot name="menu"/>
    {/if}
</div>