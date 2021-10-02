<template>
  <div ref="test" class="reveal text-left shadow-xl rounded-xl min-w-full">
    <div class="reveal fromLeft">
      <img src="https://res.cloudinary.com/griffintech/image/upload/v1591145178/Fotostack/IMG-20191126-WA0002_mnapsa.jpg" alt="blog post image" class="w-full rounded-tl-xl rounded-tr-xl">
      <p ref="date" class="text-sm text-gray-500 py-2 pl-4 -mt-4 reveal">
        October 10, 2019
      </p>
      <p ref="header" class="text-xl font-semibold text-yellow-600 pl-4 pb-3 my-1 reveal">
        This totally works!
      </p>
      <p ref="text" class="my-1 px-4 pb-4 text-gray-600 reveal">
        Works with GSAP! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe assumenda amet, maiores rerum necessitatibus voluptate aliquid, corrupti officiis qui sapiente, sed pariatur magni vero facilis dolor laudantium quibusdam sint odit. <span class="flex pt-2">Read more...</span>
      </p>
      <div class="flex pl-4 pb-5 mt-2">
        <p ref="tags" class="my-1 mx-2 border-2 bg-yellow-200 border-yellow-500 py-3 px-5 rounded-md reveal">
          tags
        </p>
        <p ref="tags" class="my-1 mx-2 border-2 bg-yellow-200 border-yellow-500 py-3 px-5 rounded-md reveal">
          tags
        </p>
        <p ref="tags" class="my-1 mx-2 border-2 bg-yellow-200 border-yellow-500 py-3 px-5 rounded-md reveal">
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
        duration: 1.75,
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
          delay: 0.1
        })
        tl.to(secondText, {
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

<style scoped>
  * {
    overflow-x: hidden !important;
  }

  .test {
    color: red;
    display: inline-block;
  }
</style>
