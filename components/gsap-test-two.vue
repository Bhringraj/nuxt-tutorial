<template>
  <div ref="test" class="reveal">
    <div class="reveal fromLeft">
      <h1 ref="header" class="text-5xl py-10 my-5 reveal">
        This totally works!
      </h1>
      <p ref="firstText" class="py-10 my-5 reveal">
        Works with GSAP!
      </p>
      <p ref="secondText" class="py-10 my-5 reveal">
        Works with GSAP!
      </p>
    </div>
    <div class="reveal fromRight">
      <h1 ref="header" class="text-5xl py-10 my-5 reveal">
        This totally works!
      </h1>
      <p ref="firstText" class="py-10 my-5 reveal">
        Works with GSAP!
      </p>
      <p ref="secondText" class="py-10 my-5 reveal">
        Works with GSAP!
      </p>
    </div>
    <div class="reveal fromLeft">
      <h1 ref="header" class="text-5xl py-10 my-5 reveal">
        This totally works!
      </h1>
      <p ref="firstText" class="py-10 my-5 reveal">
        Works with GSAP!
      </p>
      <p ref="secondText" class="py-10 my-5 reveal">
        Works with GSAP!
      </p>
    </div>
    <div class="reveal fromRight">
      <h1 ref="header" class="text-5xl py-10 my-5">
        This totally works!
      </h1>
      <p ref="firstText" class="py-10 my-5 reveal">
        Works with GSAP!
      </p>
      <p ref="secondText" class="py-10 my-5 reveal">
        Works with GSAP!
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default Vue.extend({
  mounted () {
    gsap.registerPlugin(ScrollTrigger)
    this.animate()
  },
  methods: {
    animateFrom (elem, direction) {
      direction = direction || 1
      let x = 0
      let y = direction * 100

      if (elem.classList.contains('fromLeft')) {
        x = -100
        y = 0
      } else if (elem.classList.contains('fromRight')) {
        x = 100
        y = 0
      }
      elem.style.transform = `translate(${x}px, ${y}px)`
      elem.style.opacity = '0'
      gsap.fromTo(elem, {
        x,
        y,
        autoAlpha: 0
      }, {
        duration: 3.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto'
      })
    },
    hide (elem) {
      gsap.set(elem, { autoAlpha: 0 })
    },
    animate () {
      gsap.utils.toArray('.reveal').forEach((elem) => {
        this.hide(elem)

        const div = this.$refs.test
        const header = this.$refs.header
        const text = this.$refs.firstText
        const secondText = this.$refs.secondText
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

        ScrollTrigger.create({
          trigger: elem,
          onEnter: () => { this.animateFrom(elem) },
          onEnterBack: () => { this.animateFrom(elem, -1) },
          onLeave: () => { this.hide(elem) }
        })
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
