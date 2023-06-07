<script>
    export let canvasOptions;
</script>

<div>
    <ul>
        <li>Width:<span><input type="text" bind:value={canvasOptions.width}></span></li>
        <li>Heigh:<span><input type="text" bind:value={canvasOptions.height}></span></li>
        <li>inScale(Content Scale):<span><input type="text" bind:value={canvasOptions.inScale}></span></li>
    </ul>
</div>