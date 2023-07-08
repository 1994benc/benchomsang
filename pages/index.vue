<template>
  <div
    style="min-height: 100vh"
    class="mx-auto max-w-5xl flex flex-col justify-start items-center mb-16 mt-32 p-6 gap-6"
  >
    <div class="max-w-md my-16"><BensBio /></div>
    <div class="text-sm mb-1">Here's a random emoji</div>
    <EmojiOfTheDay />
    <div
      class="flex justify-start items-center gap-5 my-4 border rounded px-4 py-2 border-gray-600 dark:border-opacity-100 border-opacity-25"
    >
      <NuxtLink
        href="https://github.com/bencsn"
        target="blank"
        class="text-button flex items-center gap-1"
        ><IconCode /> GitHub</NuxtLink
      >
      <NuxtLink
        href="https://www.linkedin.com/in/ben-chomsang-416353a8/"
        target="blank"
        class="text-button flex items-center gap-1"
        ><IconUsers /> LinkedIn</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
