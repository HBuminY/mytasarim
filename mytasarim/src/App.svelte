<script>
  import Canvas from "./lib/canvas.svelte";
  import LayoutMenu from "./lib/layoutMenu.svelte";
  import MenuTab from "./lib/menuTab.svelte";
  import Menu from "./lib/menu.svelte";
  import { mousePos } from "./lib/stores.js";
  import FileMenu from "./lib/fileMenu.svelte";
  import CanvasMenu from "./lib/canvasMenu.svelte";
  import Content from "./lib/content.svelte";

  let canvasDiv;

  let canvasOptions={
    width:620,
    height:841
  };
  
  function mousePosHandler(event){
    mousePos.mouseEvent(event)
  };
</script>

<svelte:body on:mousemove={mousePosHandler}/>

<main class="fixed top-0 left-0 w-screen h-screen bg-black">

    <div class="flex flex-row w-full h-full">

      <Menu>
        <MenuTab>
          <span slot="title">File</span>
          <span slot="menu"><FileMenu bind:canvasDiv bind:canvasOptions/></span>
        </MenuTab>

        <MenuTab>
          <span slot="title">Canvas</span>
          <span slot="menu"><CanvasMenu bind:canvasOptions/></span>
        </MenuTab>

        <MenuTab>
          <span slot="title">LAYOUT</span>
          <span slot="menu"><LayoutMenu/></span>
        </MenuTab>
      </Menu>

      <div class="grow relative h-full bg-slate-300 overflow-clip">
        <Canvas bind:canvasOptions bind:canvasDiv>
          <div class="w-full h-full">
              <Content bind:canvasOptions/>
          </div>
        </Canvas>
      </div>

    </div>

</main>