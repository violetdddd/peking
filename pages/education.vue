<template>
    <div class="hidden lg:flex justify-between">
    <Map @province="show" />
    <div :class="{'visible': whether,'invisible': !whether}" class="h-[600px] w-[900px] bg-black"></div>
</div>
</template>

<script setup lang="js">
const whether = ref(false)
function show(para){
    
    whether.value = !whether.value
    console.log(whether.value)
}


</script>