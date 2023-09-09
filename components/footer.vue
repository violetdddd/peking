<template>
    <footer class="relative z-[49] bottom-0 bg-white dark:bg-gray-900 border-t-red-500 border-t-[25px]">
        <div class="mx-auto w-full max-w-screen-xl">
            <div class="flex items-center justify-evenly mt-2">
                <div class="flex items-center justify-center h-[9vw] w-[9vw] border-r-[rgb(235,189,195)] border-r-[1px] pr-[30px]">
                    <img src="https://static.igem.wiki/teams/4713/wiki/igem.png" alt="Peking Logo" />
                </div>
                <div class="grid grid-rows-1 grid-cols-3 gap-5">
                    <div>
                        <img class=" h-[5vw]" alt="School of Life Sciences, Peking University" src="https://static.igem.wiki/teams/4713/wiki/foot1.png">
                    </div>
                    <div>
                        <img class="h-[5vw]" src="https://static.igem.wiki/teams/4713/wiki/foot2.png" alt="Center for Quantitative Biology, Peking University">
                    </div>
                    <div>
                        <img class="h-[5vw]" src="https://static.igem.wiki/teams/4713/wiki/snapgene-logo.png" alt="SnapGene">
                    </div>
                </div>  
            </div>
            <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-4" />
            <div class=" grid grid-cols-2 gap-8 px-2 py-4 lg:py-6 md:grid-cols-5">
                <div v-for="(item, index) in bigTitle">
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{{ item }}</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium text-xs">
                        <li v-for="ite in subTitle[index]" class="mb-4">
                            <!-- <NuxtLink :to="'/' + ite.toLowerCase().replaceAll(' ', '-')" class="hover:underline">{{ ite
                            }}
                            </NuxtLink> -->
                            {{ ite }}
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-4" />
            <div class="">
                <span class="block text-sm text-gray-900 sm:text-center dark:text-white">© 2023 - Content on this
                    site is
                    licensed under a <a rel="license" href="https://creativecommons.org/licenses/by/4.0/"
                        class="hover:underline">Creative Commons Attribution 4.0 International license</a>.
                </span>
                <span class="block text-sm text-gray-900 sm:text-center dark:text-white">
                    The repository used to create this website is available at <a class="hover:underline"
                        href="https://gitlab.igem.org/2023/peking">gitlab.igem.org/2023/peking</a>.
                </span>
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
["MODEL", "SOFTWARE", "HARDWARE", "MEASUREMENT"], ["HUMAN PRACTICES", "EDUCATION & PUBLIC ENGAGEMENT"],
["MEMBERS", "COLLABORATIONS", "ATTRIBUTIONS"]]);



</script>

<style scoped></style>