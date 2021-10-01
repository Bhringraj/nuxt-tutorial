<template>
  <div ref="test">
    <h1 ref="header" class="text-5xl py-10 my-5 gsap-baby">
      This totally works!
    </h1>
    <p ref="firstText" class="py-10 my-5 gsap-baby">
      Works with GSAP!
    </p>
    <p ref="secondText" class="py-10 my-5 gsap-baby">
      Works with GSAP!
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import { gsap } from 'gsap'
export default Vue.extend({
  mounted () {
    this.animate()
  },
  methods: {
    animate () {
      const div = this.$refs.test
      const header = this.$refs.header
      const text = this.$refs.firstText
      const secondText = this.$refs.secondText
      // const el = document.querySelectorAll('.gsap-baby')
      const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: 'power2.inOut' }
      })
      tl.set(div, {
        opacity: 0,
        yPercent: 450
      })
      tl.set(header, {
        opacity: 0,
        yPercent: 450
      })
      tl.set(text, {
        opacity: 0,
        x: 0,
        y: 0
      })
      tl.set(secondText, {
        opacity: 0,
        x: 0,
        y: 0
      })
      // tl.set(el, {
      //   opacity: 0,
      //   yPercent: 450
      // })
      // tl.to(el, {
      //   opacity: 1,
      //   yPercent: 0,
      //   delay: 0.2
      // })
      tl.to(div, {
        opacity: 1,
        yPercent: 0
      })
      tl.to(header, {
        opacity: 1,
        yPercent: 0
      })
      tl.to(text, {
        opacity: 1,
        yPercent: 0,
        delay: 0.2
      })
      tl.to(secondText, {
        opacity: 1,
        yPercent: 0,
        delay: 0.3
      })
    }
  }
})
</script>
<style scoped>
  .test {
    color: red;
    display: inline-block;
  }
</style>
