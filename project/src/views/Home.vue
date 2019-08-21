<template>
  <div class="home">
    <SvgIcon class="text-red-500" name="duck" />
    <span class="first:mt-2 specialspan">
      Styles by tailwind
    </span>
    <span class="first:mt-2 specialspan">
      Styles by tailwind
    </span>
    <HelloWorld msg="component props" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    SvgIcon
  }
};
</script>

<style lang="postcss" scoped>
.specialspan {
  &:hover {
    @apply bg-white text-red-300;
  }
  @apply bg-black bg-blue-300 block p-8 text-6xl text-center text-white;
}
</style>
