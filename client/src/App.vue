<template>
  <div>
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/words" class="item">
            <i class="list icon"></i>Words
          </router-link>
          <router-link to="/words/new" class="item">
            <i class="plus icon"></i>New
          </router-link>
          <router-link to="/about" class="item">
            <i class="question circle outline icon"></i>About
          </router-link>
          <a href="https://greenwich.edu.vn/en/english/" class="item">
            Greenwich Vietnam
          </a>
        </div>
        <!-- <button @click="toggleDark()"> Enter here
        </button>
        <p>Dark theme: {{ isDark }}</p> -->
      </div>
    </div>

    <div class="ui container">
      <div class="ui grid">
        <div class="row">
          <div class="twelve wide column">
            <router-view />
          </div>
          <div class="four wide column">
            <flash-message></flash-message>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<script setup>
  import {useDark, useToggle} from "@vueuse/core";
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
</script>

<!-- <style>
.dark{
  background: #16171d;
  color: #fff;
}
</style> -->
