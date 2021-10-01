<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-item
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        :slideurl="slide.url"
        :slideheader="slide.header"
        :slidetext="slide.text"
        :current-slide="currentSlide"
        :index="index"
      />
      <carousel-control @prev="prev" @next="next" />
    </div>
  </div>
</template>

<script>
import carouselItem from './carouselItem.vue'
import carouselControl from './carouselControl.vue'

export default {
  components: { carouselItem, carouselControl },
  props: {
    slides:
      {
        type: Array,
        required: true
      }
  },
  data: () => ({
    currentSlide: 0,
    slideInterval: null
  }),
  mounted () {
    this.slideInterval = setInterval(() => {
      this.next()
    }, 4000)
  },
  beforeUnmount () {
    clearInterval(this.slideInterval)
  },
  methods: {
    setCurrentSlide (index) {
      this.currentSlide = index
    },
    prev () {
      const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1
      this.setCurrentSlide(index)
    },
    next () {
      const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0
      this.setCurrentSlide(index)
    }
  }
}
</script>

<style scoped>
  .carousel {
    display: flex;
    justify-content: center;
  }

  .carousel-inner {
    position: relative;
    width: 900px;
    height: 400px;
    overflow: hidden;
  }
</style>
