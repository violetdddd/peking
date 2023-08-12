<template>
  <PageTitle/>
  <div class="flex items-start justify-evenly relative scroll-smooth">
    <!-- <AppSideBar /> -->
    <Sider class="hidden lg:block flex-grow" />
    
    <div
      class="scroll-smooth font-light my-8 flex-grow max-w-2xl px-4 py-10 bg-white sm:px-8 sm:shadow ring-1 ring-gray-200 sm:rounded-lg"
    >
      <main class="scroll-smooth">
        
        <ContentDoc>
          <template #empty>
            <h1>Oops, nothing here yet</h1>
            <NuxtLink href="/">Go back home</NuxtLink>
          </template>
          <template #not-found>
            <h1>Oops, nothing found</h1>
            <NuxtLink href="/">Go back home</NuxtLink>
          </template>
        </ContentDoc>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'katex/dist/katex.min.css'
</script>

<style scoped>


</style>