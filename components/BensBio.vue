<template>
  <div class="flex flex-col gap-4">
    <div>
      Ben Chomsang is a full-stack software
      <span class="wizard">engineer</span> currently working at
      <a
        target="_blank"
        class="font-semibold hover:text-bensgreen"
        href="https://zincwork.com"
        >Zinc</a
      >.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wizard {
  @apply text-benspink font-semibold;
}

.wizard::after {
  content: "🧙‍♂️";
  padding-left: 0.25rem;
}
</style>
