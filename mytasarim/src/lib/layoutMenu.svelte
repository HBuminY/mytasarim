<script>
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
    <span>
        <button class="button">
            Add Layout
        </button>
        <input type="text" name="newLayoutName" class="textInput">
    </span>

    <ul>
        {#each laytouts as layout}
        <li class="border border-black">
            <span>Name:{layout.name}</span>
            <button class="button">delete</button>
        </li>
        {/each}
    </ul>
</div>