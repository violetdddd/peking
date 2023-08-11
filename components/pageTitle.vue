<template>
    <div class="h-[15vh] bg-transparent">
        <p class=" text-center text-5xl pt-5">{{ page?.title }}</p>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
const {toc, page} = useContent();


</script>

<style scoped>

</style>