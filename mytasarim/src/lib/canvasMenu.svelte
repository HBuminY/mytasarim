<script>
    export let canvasOptions;
</script>

<div>
    <ul>
        <li>Width:<span><input type="text" bind:value={canvasOptions.width} class="w-full"></span></li>
        <li>Heigh:<span><input type="text" bind:value={canvasOptions.height} class="w-full"></span></li>
        <li>inScale(Content Scale):<span><input type="text" bind:value={canvasOptions.inScale} class="w-full"></span></li>
    </ul>
</div>