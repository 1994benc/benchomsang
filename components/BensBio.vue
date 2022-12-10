<template>
  <div class="flex flex-col gap-4">
    <div>
      Ben Chomsang is a full-stack software
      <span class="wizard">wizard</span> currently working at Zinc, where he
      uses his magical coding powers to automate background checking for growing
      companies.
    </div>

    <div>
      In his free time, Ben enjoys spending time with his 3-year-old border
      collie, taking him on long walks in the field or going on several-hour
      hikes. He also has a passion for gardening and tends to his beloved
      collection of houseplants, which he talks to and sings to in order to help
      them grow.
    </div>

    <div>
      When he's not busy with his plants or his dog, you can find him conjuring
      up new spells and incantations to use in his software engineering work.
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
