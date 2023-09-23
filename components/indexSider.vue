<template>
    <svg id="svg" :viewBox="viebox" class="fixed left-1/2 top-1/4 transition-opacity duration-20">
        <g id="Layer_1">
            <!-- <path id="path"
                d="m58.33331,47.33333c-16,60 101,48 -6,132c-107,84 30,146 29.66669,145.66667c0.33331,0.33332 74.33331,30.33332 14.33331,94.33332c-60,64 -4,117 -4.33331,116.66668"
                opacity="100" stroke="black" fill="none" /> -->
                <path id="path" 
        d="M -5,0
           Q 112.5 57.5 75 112.5 
           T 32.5 187.5
           Q 25 212.5 75 250
           T 47.5 300"
        fill="none" stroke="white" stroke-width="10px" />
        </g>
        <g id="Layer_2">

            <g id="svg_8">
                <ellipse ry="17" rx="22.5" id="svg_1" cy="61.33333" cx="54.835" stroke="#FFF093" fill="#FFF093" />
                <path
                    d="m68.335,49.33333c0,0 0,-1 1,-1c1,0 2,0 3,0c1,0 2,0 3,0c1,0 1,0 2,0c1,0 1,0 2,0c1,0 1,0 2,0c1,0 2,0 3,0c0,0 0.29289,-0.29289 1,-1c0.70711,-0.70711 1,0 1,-1c0,0 1.29289,0.70711 2,0c0.70711,-0.70711 0,-1 0,-2l1,0"
                    stroke="#FFF093" fill="none" />
                <path
                    d="m76.335,62.33333c1,0 2.107,-0.91901 6,0c2.17625,0.51375 3.69344,1.4588 5,2c0.92388,0.38269 1,0 2,0c1,0 1,0 3,0c0,0 1,0 2,0c0,0 1,0 2,0c1,0 2,0 4,0l0,0"
                    id="svg_3" stroke="#FFF093" fill="none" />
                <path
                    d="m62.335,80.33333c0,0 0.82443,-0.90211 2,1c0.52573,0.85065 1.09789,1.82443 3,3c0.85065,0.52573 2.45881,-0.30656 3,1c0.38268,0.92387 1,1 2,1c0,0 0,1 0,2c0,0 0,1 0,2c0,0 -0.61732,0.07613 -1,1c-0.54119,1.30656 -1,1 -1,2c0,1 -0.70711,2.29289 0,3c0.70711,0.70711 2,0 2,1l0,0l1,1"
                    id="svg_4" stroke="#FFF093" fill="none" />
                <path
                    d="m58.335,46.33333c0,0 -0.07612,0.38269 -1,0c-2.61312,-1.0824 -2.69344,-2.4588 -4,-3c-0.92388,-0.38269 -2.07612,0.38269 -3,0c-1.30656,-0.5412 -3.29289,-0.29289 -4,-1c-0.70711,-0.70711 0.38268,-2.07613 0,-3c-0.5412,-1.30656 -1,-2 -1,-3c0,-2 -0.70711,-3.29289 0,-4c0.70711,-0.70711 0.29289,-1.29289 1,-2c0.70711,-0.70711 1.69343,-0.4588 3,-1c0.92388,-0.38269 1,-1 1,-1c0,0 0.70711,-1.29289 0,-2c-0.70711,-0.70711 -2,0 -2,0l-1,0l-1,0l0,0"
                    id="svg_5" stroke="#FFF093" fill="none" />
                <path
                    d="m45.335,74.33333c0,0 0,0 -1,0c-1,0 -2,0 -3,0c-1,0 -1.69344,0.4588 -3,1c-0.92388,0.38269 -2,1 -3,1c0,0 -1,0 -1,1c0,1 0,2 0,3c0,0 0,2 0,3c0,1 0,1 -1,2c-1,1 -0.61732,1.07613 -1,2c-0.5412,1.30656 -2,1 -2,2c0,0 0,1 -1,1c0,0 -1,0 -1,0l0,0"
                    id="svg_6" stroke="#FFF093" fill="none" />
                <path
                    d="m32.335,57.33333c-1,-1 -2,-1 -2,-2c0,-1 -1,-1 -1,-1c-1,0 -1,-1 -1,-2c0,0 0,-1 0,-2c0,-2 0,-2 0,-4c0,-1 0,-2 0,-3c0,-1 0.38268,-1.07613 0,-2c-0.5412,-1.30656 -2,-3 -3,-3l-1,-2l-1,0"
                    id="svg_7" stroke="#FFF093" fill="none" />
            </g>
        </g>
    </svg>
</template>

<script setup lang="js">

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import { MotionPathPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.defaults({ease: "none"});
const viebox = ref("")


onMounted(() => {
    let height=0
        const el = document.querySelector('#index')
      height = el.clientHeight
    
    viebox.value = "0 0 600 "+ height
    console.log(viebox)

    let links = gsap.utils.toArray("footer");
    let lis = gsap.utils.toArray("svg")
    lis.forEach(el => el.classList.add("active"));
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
        lis.forEach(el => el.classList.add("active"));
    }
    const main = gsap.timeline({defaults: {duration: 1},
        scrollTrigger: {
            trigger: "#svg",
            scrub: true,
            start: "top center",
            end: "bottom center",
        }
    })
        
        .to("#Layer_2", {duration: 0.01, autoAlpha: 1})
        .to("#Layer_2", {
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
            }

        }, 0)
    
})



</script>

<style scoped>
svg {
    max-width: 600px;
    overflow: visible;
    opacity: 0;
}

svg.active {
    opacity: 1;
}
</style>