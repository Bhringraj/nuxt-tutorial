<template>
  <transition name="fade" mode="in-out">
    <div
      v-show="currentSlide === index"
      class="carousel-item"
    >
      <h2> {{ slideheader }} </h2>
      <img :src="slide" alt="image slide">
      <p> {{ slidetext }} </p>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    slideurl: {
      type: String,
      required: true
    },
    slidetext: {
      type: String,
      required: true
    },
    slideheader: {
      type: String,
      required: true
    },
    currentSlide: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>I go just f
  .carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .8s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
