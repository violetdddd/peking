<template>
    <div id="svg" class="flex fixed top-1/4 justify-center">
        <svg class="transition-opacity duration-20">
            <g id="Layer_1">
                <path id="svg_2"
                    d="m58.33331,47.33333c-16,60 101,48 -6,132c-107,84 30,146 29.66669,145.66667c0.33331,0.33332 74.33331,30.33332 14.33331,94.33332c-60,64 -4,117 -4.33331,116.66668"
                    opacity="NaN" stroke="#000" fill="none" />
            </g>
        </svg>
    </div>
</template>

<script setup lang="js">

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

onMounted(() => {
    let links = gsap.utils.toArray("footer");
    let lis = gsap.utils.toArray("svg")
    lis[0].classList.add("active");
    links[0].classList.add("active");
    console.log(links[0])
    links.forEach(a => {
        let element = a;
        ScrollTrigger.create({
            trigger: element,
            start: "top bottom",
            onEnter: self => setActive(),
            onLeaveBack: self => setuActive(), 
        });

    });

    function setActive() {
        lis.forEach(el => el.classList.remove("active"));
    }

    function setuActive() {
        lis[0].classList.add("active");
    }
})


</script>

<style scoped>
svg {
    max-width: 600px;
    overflow: visible;
    opacity: 0;
}

svg.active {
    opacity: 100;
}</style>