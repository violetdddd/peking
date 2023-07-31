<template>
  <div @click.self="hideBack"
    :class="{ 'bg-black/[0.85]': inSide, 'z-50': zIndex, 'bg-transparent': !inSide,'-z-10':!zIndex }"
    class="flex items-center justify-center flex-col transition fixed w-[100vw] h-[100vh]">
    <div :class="{ 'transition-opacity ease-in-out duration-300 opacity-0 -z-10': !inSide, 'animate-fade': inSide }"
      class=" flex justify-center -space-x-10 text-white text-3xl font-bold">
      <div
        class="transition ease-in-out delay-150 duration-1000 hover:scale-125 hover:z-[70] w-[50vh] h-[50vh] scale-110 rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-[50] dark:ring-slate-900">
        <div class=" uppercase pl-5">
          <ol id="mainList" class="">
            <li  @mouseover="addActive(0)" :class="{'active':mainListActive[0]}">
              <h1>project</h1>
            </li>
            <li  @mouseover="addActive(1)" :class="{'active':mainListActive[1]}">
              <h1>wet lab</h1>
            </li>
            <li @mouseover="addActive(2)" :class="{'active':mainListActive[2]}">
              <h1>dry lab</h1>
            </li>
            <li @mouseover="addActive(3)" :class="{'active':mainListActive[3]}">
              <h1>human
              <br>
              practices</h1>
            </li>
            <li @mouseover="addActive(4)" :class="{'active':mainListActive[4]}">
              <h1>team</h1>
            </li>
          </ol>
        </div>
      </div>
      <div
        class="transition ease-in-out delay-150 duration-1000 hover:scale-110 hover:z-[70] w-[50vh] h-[50vh] rounded-full flex items-center justify-center bg-pink-500 shadow-lg ring-2 ring-white z-[60] dark:ring-slate-900">
        <div class="uppercase pl-5">
          <ol id="subList" :class="{'hidden':!mainListActive[0]}">
            <li @click="hideBack">
              <h1><NuxtLink to="/about">description</NuxtLink></h1>
            </li>
            <li  @click="hideBack">
              <h1>implementation</h1>
            </li>
            <li @click="hideBack">
              <h1>contribution</h1>
            </li>
          </ol>
          <ol id="subList" :class="{'hidden':!mainListActive[1]}">
            <li @click="hideBack">
              <h1>design</h1>
            </li>
            <li  @click="hideBack">
              <h1>engineering</h1>
            </li>
            <li @click="hideBack">
              <h1>results</h1>
            </li>
            <li @click="hideBack">
              <h1>parts</h1>
            </li>
            <li @click="hideBack">
              <h1>experiments</h1>
            </li>
            <li @click="hideBack">
              <h1>safety</h1>
            </li>
          </ol>
          <ol id="subList" :class="{'hidden':!mainListActive[2]}">
            <li @click="hideBack">
              <h1>model</h1>
            </li>
            <li  @click="hideBack">
              <h1>software</h1>
            </li>
            <li @click="hideBack">
              <h1>hardware</h1>
            </li>
            <li @click="hideBack">
              <h1>measurement</h1>
            </li>
          </ol>
          <ol id="subList" :class="{'hidden':!mainListActive[3]}">
            <li @click="hideBack">
              <h1>integrated<br>human practices</h1>
            </li>
            <li  @click="hideBack">
              <h1>education & <br>public engagement</h1>
            </li>
          </ol>
          <ol id="subList" :class="{'hidden':!mainListActive[4]}">
            <li @click="hideBack">
              <h1 >members</h1>
            </li>
            <li  >
              <h1>collaborations</h1>
            </li>
            <li @click="hideBack">
              <h1>attributions</h1>
            </li>
          </ol>
        </div>
      </div>

    </div>


  </div>

  <!-- nav bar -->
  <nav
    class=" bg-transparent dark:bg-gray-800 dark:border-gray-700 sticky z-50 top-0 left-0 right-0">
    <div @click.self="hideBack" class=" flex items-center justify-between flex-wrap p-4">
      <NuxtLink to="/" class="flex items-center">
        <img src="https://static.igem.wiki/teams/4713/wiki/igem.png" class="h-8 mr-3" alt="Peking Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Peking</span>
      </NuxtLink>
      <div id="navBut" :class="{ 'invis': inSide }"
        class="max-w-screen-xl transition ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500 duration-300 ... h-14 w-14 rounded-full bg-blue-500 flex justify-center items-center flex-col">
        <div @click="toggleIn" :class="{ 'active': inSide }" class="cursor-pointer">
          <div id="topBar" class="h-[4px] bg-white w-[30px] rounded-[5px] transition duration-500"></div>
          <div id="midBar" :class="{ 'noSee': inSide }"
            class="transition duration-250 h-[4px] bg-white w-[70%] rounded-[5px] mt-[6px] mb-[6px]">
          </div>
          <div id="botBar" class="h-[4px] bg-white w-[30px] rounded-[5px] transition duration-500"></div>
        </div>

      </div>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})

const zIndex = ref(false);

const inSide = ref(false);

const mainListActive = ref([true,false,false,false,false]);

function toggleIn() {
  inSide.value = !inSide.value;
  zIndex.value = true;
}

function hideBack() {
  inSide.value = false;
  setTimeout(()=>{zIndex.value = false;},300);
}

function addActive(n:number) {
  if(mainListActive.value[n])return;
  
  for(let i=0;i<5;i++){
    if(mainListActive.value[i]){
      mainListActive.value[i]=false;
    }
  }
  mainListActive.value[n] = !mainListActive.value[n];
}

</script>

<style scoped>
#navBut .active #topBar {
  transform: scale(0.7) translateY(17px) rotate(45deg);
}

#navBut .active #botBar {
  transform: scale(0.7) translateY(-11px) rotate(-45deg);
}

.invis {
  background-color: transparent;
}

#midBar.noSee {
  transition-property: background-color;
  background-color: transparent;
}

#mainList{
  counter-reset: li;
}

#mainList li::before{
  counter-increment: li;
  content: counter(li) ". ";
    max-width: 0px;
    max-height: 0px;
    font-size: 1em;
    left: -1.3em;
    position: relative;
    display: flex;
  -webkit-text-fill-color: #ec4899;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}
#mainList li.active::before{
  -webkit-text-fill-color: white;
}

#mainList li.active h1{
  transition: 0.3s;
  box-shadow: inset 0 -0.5em 0 -1px #db2777;
}

#subList li h1:hover{
  transition: 0.3s;
  box-shadow: inset 0 -0.1em 0 -1px #db2777;
}
ol#subList {
  width: fit-content;
  text-align: center;
  text-align: -webkit-center;
  text-align: -moz-center;
}
#subList li{
  cursor: pointer;
  width: fit-content;
  padding: 10px
}
#mainList li h1{
  width:fit-content;
  margin:0;
  box-shadow: inset 0 0em 0 0 #db2777;
}

#mainList li{
  padding: 10px;
}

</style>