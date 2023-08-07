<template>
    <div class=" w-[100vw] h-[20vh] bg-transparent">
        {{ page.title }}
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
const {toc, page} = useContent();


</script>

<style scoped>

</style>