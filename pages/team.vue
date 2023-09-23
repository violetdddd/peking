<template>
  
    <PageTitle/>
  
      <!-- <AppSideBar /> -->
      <div class="flex justify-evenly items-start">
      <div
        class="scroll-smooth font-light my-8 flex-grow max-w-3xl px-4 py-10 bg-white sm:px-8 sm:shadow ring-1 ring-gray-200 sm:rounded-lg"
      >
        <main class="scroll-smooth text-lg">
          
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