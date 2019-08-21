<template>
  <div class="home">
    <span class="text-center bg-black p-8 text-white block">
      Styles by tailwind
    </span>
    <HelloWorld msg="component props" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
