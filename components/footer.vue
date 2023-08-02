<template>
    <footer class="relative z-[49] bottom-0 bg-white dark:bg-gray-900 border-t-red-500 border-t-[25px]">
        <div class="mx-auto w-full max-w-screen-xl">
            <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
                <div v-for="(item, index) in bigTitle">
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{{ item }}</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li v-for="ite in subTitle[index]" class="mb-4">
                            <NuxtLink :to="'/' + ite.toLowerCase().replaceAll(' ','-')" class="hover:underline">{{ ite }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

const bigTitle = ref(["PROJECT", "WET LAB", "DRY LAB", "HUMAN PRACTICE", "TEAM"]);
const subTitle = ref([["DESCRIPTION", "IMPLEMENTATION", "CONTRIBUTION"], ["ENGINEERING", "RESULTS", "PARTS", "EXPERIMENTS", "SAFETY"],
["MODEL", "SOFTWARE", "HARDWARE", "MEASUREMENT"], ["INTEGRATED HUMAN PRACTICES", "EDUCATION & PUBLIC ENGAGEMENT"],
["MEMBERS","COLLABORATIONS","ATTRIBUTIONS"]]);



</script>

<style scoped></style>