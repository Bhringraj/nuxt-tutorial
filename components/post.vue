<template>
  <div ref="test" class="reveal text-left max-w-full">
    <div class="reveal fromLeft">
      <img src="" alt="blog post image">
      <p ref="date" class="text-sm text-gray-500 py-2 -mt-5 reveal">
        October 10, 2019
      </p>
      <p ref="header" class="text-xl text-gray-800 my-1 reveal">
        This totally works!
      </p>
      <p ref="text" class="my-1 reveal">
        Works with GSAP! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe assumenda amet, maiores rerum necessitatibus voluptate aliquid, corrupti officiis qui sapiente, sed pariatur magni vero facilis dolor laudantium quibusdam sint odit. Read more...
      </p>
      <div class="flex">
        <p ref="tags" class="my-1 mx-2 border-2 bg-green-400 border-green-700 py-3 px-5 rounded-full reveal">
          tags
        </p>
        <p ref="tags" class="my-1 mx-2 border-2 bg-green-400 border-green-700 py-3 px-5 rounded-full reveal">
          tags
        </p>
        <p ref="tags" class="my-1 mx-2 border-2 bg-green-400 border-green-700 py-3 px-5 rounded-full reveal">
          tags
        </p>
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
  * {
    overflow-x: hidden !important;
  }

  .test {
    color: red;
    display: inline-block;
  }
</style>
