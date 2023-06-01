<script>
    export let canvasOptions;
</script>

<div>
    <ul>
        <li><span class="text-red-700">Warning : changing the sizes might cause disproportion in the final pdf</span></li>
        <li>Width:<span><input type="text" bind:value={canvasOptions.width}></span></li>
        <li>Heigh:<span><input type="text" bind:value={canvasOptions.height}></span></li>
    </ul>
</div>