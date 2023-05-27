<script>
  import Canvas from "./lib/canvas.svelte";
  import Menu from "./lib/menu.svelte";
  import { mousePos } from "./lib/stores.js";

  let ww = window.innerWidth; // window width
  let wh = window.innerHeight; // window height

  let canvasOptions={
    width:700,
    height:700,
  };
  
  function mousePosHandler(event){
    mousePos.mouseEvent(event)
  };
</script>

<svelte:body on:mousemove={mousePosHandler}/>

<main class="fixed top-0 left-0 w-screen h-screen bg-black">

    <div class="flex flex-row w-full h-full">

      <Menu>

      </Menu>

      <div class="grow relative h-full bg-slate-300 overflow-clip">
        <Canvas bind:canvasOptions>
          <p class="text-black">{JSON.stringify(canvasOptions)}</p>
        </Canvas>
      </div>

    </div>

</main>