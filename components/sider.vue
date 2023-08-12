<template>
    
    <div id="myDiv" class="font-medium translate-y-[-50%] scale-50 lg:scale-100 mt-[200px] mr-3 lg:mr-[32px] mb-[0px] ml-[4vw] uppercase sticky top-[50%] min-w-[220px] max-w-[350px] float-left ">
        <h1 class="font-light">{{ page?.title }}</h1>

        <ul class="font-extralight">
            <li v-for="e in toc?.links">
                <div class=" flex cursor-pointer items-center mt-6">
                <div class="transition ease-out duration-500 mr-[8px] border-solid border max-w-[15px] max-h-[15px] h-[10vw] w-[10vh] rounded-full border-blue-500"></div>
                <a class=" text-lg" :href="'#' + e.id">{{ e.text }}</a></div>
                <ul>
                    <li v-for="c in e?.children">
                        <div class="flex cursor-pointer items-center mt-4">
                        <div class="transition ease-out duration-500 ml-[16px] mr-[8px] border-solid border max-w-[15px] max-h-[15px] h-[8vw] w-[8vh] rounded-full border-blue-500"></div>
                        <a :href="'#' + c.id">{{ c.text }}</a></div>
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</template>

<script setup lang="js">
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const { toc, page } = useContent();
onMounted(()=>{
  
let links = gsap.utils.toArray("div#myDiv ul li a");
let lis = gsap.utils.toArray("div#myDiv ul li")
lis[0].classList.add("active");
links[0].classList.add("active");
links.forEach(a => {
  let element = document.querySelector(a.getAttribute("href")),
      linkST = ScrollTrigger.create({
            trigger: element,
            start: "top 100"
          });
  ScrollTrigger.create({
    trigger: element,
    start: "top 101",
    end: "bottom 100",
    onToggle: self => self.isActive && setActive(a,a.parentNode.parentNode)
  });
  a.addEventListener("click", e => {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
  });
});

function setActive(link,li) {
  links.forEach(el => el.classList.remove("active"));
  lis.forEach(el => el.classList.remove("active"));
  link.classList.add("active");
  li.classList.add("active");
}
})



</script>

<style scoped>
div#myDiv ul li a.active {
    color: #3b82f6;
  }
div#myDiv ul li.active > div > div.border{
    background-color: #3b82f6;
}
</style>