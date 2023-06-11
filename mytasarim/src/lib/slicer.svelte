<script>
  export let direction; //true:portrait, false:lanscape
  export let mousePos;

  let slicerLine;

  $:{
    if(slicerLine){
      if(direction){
        slicerLine.style.top=`${mousePos.y}px`
      }else{
        slicerLine.style.left=`${mousePos.x}px`
      };
    };
  }
</script>

{#key direction}
<div 
class="{direction?"h-[1px] w-full border-y-2":"w-[1px] h-full border-x-2"} border-black absolute"
bind:this={slicerLine}
></div>
{/key}