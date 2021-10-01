<template>
  <div class="reveal md:flex justify-center items-center">
    <div
      class="w-3/5 flex-auto p-3 border-2 m-2 reveal fromLeft"
    >
      hi again
    </div>
    <div class="w-2/5 flex-auto p-3 border-2 m-2 reveal fromRight">
      <div ref="about" class="p-3 border-2 m-2 reveal">
        hi again
      </div>
      <div ref="side" class="p-3 border-2 m-2 reveal">
        hi again
      </div>
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
        duration: 2.5,
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

        const about = this.$refs.about
        const side = this.$refs.side
        const tl = gsap.timeline({
          defaults: { duration: 0.5, ease: 'power2.inOut' }
        })
        tl.set(about, {
          opacity: 0,
          x: 0,
          y: 0
        })
        tl.set(side, {
          opacity: 0,
          x: 0,
          y: 0
        })
        tl.to(about, {
          opacity: 1,
          yPercent: 0,
          delay: 0.2
        })
        tl.to(side, {
          opacity: 1,
          yPercent: 0,
          delay: 0.2
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
