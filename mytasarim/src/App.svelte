<script>
  import Canvas from "./lib/canvas.svelte";
  import LayoutMenu from "./lib/layoutMenu.svelte";
  import MenuTab from "./lib/menuTab.svelte";
  import Menu from "./lib/menu.svelte";
  import { mousePos } from "./lib/stores.js";
  import FileMenu from "./lib/fileMenu.svelte";
  import CanvasMenu from "./lib/canvasMenu.svelte";
  import ContentDiv from "./lib/contentDiv.svelte";
  import {toolOptions, focusedDiv} from './lib/stores.js'

  let canvasDiv;

  let canvasOptions={
    width:620,
    height:841
  };
  
  function mousePosHandler(event){
    mousePos.mouseEvent(event)
  };

  function keypressHandler(e){
    let code = e.code;

    switch(code){
      case 'KeyR':
        let d = $focusedDiv;
        d.flipDirection();
        break;
        
      case 'KeyS':
        $toolOptions.sliceMode=!$toolOptions.sliceMode
        break;
    };
  };
</script>

<svelte:window 
  on:mousemove={mousePosHandler}
  on:keypress={keypressHandler}
/>

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
          <div class="relative w-full h-full flex flex-col p-1 z-0 overflow-hidden">
            <ContentDiv/>
          </div>
        </Canvas>
      </div>

    </div>

</main>