<template>
    
    <div class="scroll-smooth font-medium translate-y-[-50%] mt-[200px] mr-[32px] mb-[0px] ml-[4vw] uppercase sticky top-[50%] min-w-[220px] max-w-[350px] float-left ">
        <h1 class="font-light">{{ page?.title }}</h1>
        <ul class="font-extralight">
            
            <li v-for="e in toc?.links" >
                <div class=" flex cursor-pointer items-center mt-6">
                <div class="mr-[8px] border-solid border max-w-[15px] max-h-[15px] h-[10vw] w-[10vh] rounded-full border-blue-500"></div>
                <NuxtLink class=" text-lg" :href="'#' + e.id">{{ e.text }}</NuxtLink></div>
                <ul>
                    <li v-for="c in e?.children">
                        <div class="flex cursor-pointer items-center mt-4">
                        <div class="ml-[16px] mr-[8px] border-solid border max-w-[15px] max-h-[15px] h-[8vw] w-[8vh] rounded-full border-blue-500"></div>
                        <NuxtLink :href="'#' + c.id">{{ c.text }}</NuxtLink></div>
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>

<script setup lang="ts">
const { toc, page } = useContent();


</script>

<style scoped>

</style>