<template>
  <div class="h-screen">
    <div class="fixed top-0 w-full py-4 px-6 flex justify-between items-center">
      <div>
        <div class="flex items-center gap-1">
          <div class="uppercase font-bold">Ben Chomsang</div>
          <div class="text-xs text-green-500">&</div>
        </div>
        <div class="text-xs opacity-70">Software Engineering & Plants</div>
      </div>
      <button @click="toggleDarkMode" class="primary-button">
        {{ darkModeButtonText }}
      </button>
    </div>
    <NuxtPage />
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  data() {
    return {
      darkModeButtonText: "🌙",
    };
  },
  mounted() {
    this.restoreDarkMode();
    this.setDarkModeButtonText();
  },
  methods: {
    toggleDarkMode() {
      // set class to html element
      document.documentElement.classList.toggle("dark");
      // set button text
      this.setDarkModeButtonText();
      // save dark mode to local storage
      this.saveDarkModePreference();
    },
    setDarkModeButtonText() {
      if (document.documentElement.classList.contains("dark")) {
        this.darkModeButtonText = "☀️";
      } else {
        this.darkModeButtonText = "🌙";
      }
    },
    restoreDarkMode() {
      // if there's nothing in local storage, set dark mode to true
      if (!localStorage.getItem("darkMode")) {
        localStorage.setItem("darkMode", "true");
      }

      if (localStorage.getItem("darkMode") === "true") {
        document.documentElement.classList.add("dark");
      }
    },
    saveDarkModePreference() {
      localStorage.setItem(
        "darkMode",
        String(document.documentElement.classList.contains("dark"))
      );
    },
  },
};
</script>
