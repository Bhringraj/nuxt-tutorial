<template>
  <div>
    <div class="container flex justify-center mx-auto flex-nowrap">
      <div class="description panel bg-blue-500">
        <post />
      </div>

      <section class="panel bg-red-500">
        <post />
      </section>
      <section class="panel bg-yellow-500">
        <post />
      </section>
      <section class="panel bg-purple-500">
        <post />
      </section>
      <section class="panel bg-green-500">
        <post />
      </section>
      <section class="panel bg-gray-500">
        <post />
      </section>
    </div>
  </div>
</template>

<script>
// help
import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default Vue.extend({
  mounted () {
    gsap.registerPlugin(ScrollTrigger)
    this.animate()
  },
  methods: {
    animate () {
      const duration = 10
      const sections = gsap.utils.toArray('.panel')
      const sectionIncrement = duration / (sections.length - 1)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.container',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: 'top top',
          end: '+=5000'
        }
      })

      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        duration,
        ease: 'none'
      })

      sections.forEach((section, index) => {
        const tween = gsap.from(section, {
          opacity: 0,
          scale: 0.6,
          duration: 1,
          force3D: true,
          paused: true
        })
        this.addSectionCallbacks(tl, {
          start: sectionIncrement * (index - 0.99),
          end: sectionIncrement * (index + 0.99),
          onEnter: () => tween.play(),
          onLeave: () => tween.reverse(),
          onEnterBack: () => tween.play(),
          onLeaveBack: () => tween.reverse()
        })
        index || tween.progress(1) // the first tween should be at its end (already faded/scaled in)
      })
    },
    addSectionCallbacks (timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
      const trackDirection = (animation) => { // just adds a "direction" property to the animation that tracks the moment-by-moment playback direction (1 = forward, -1 = backward)
        const onUpdate = animation.eventCallback('onUpdate') // in case it already has an onUpdate
        let prevTime = animation.time()
        animation.direction = animation.reversed() ? -1 : 1
        animation.eventCallback('onUpdate', () => {
          const time = animation.time()
          if (prevTime !== time) {
            animation.direction = time < prevTime ? -1 : 1
            prevTime = time
          }
          onUpdate && onUpdate.call(animation)
        })
      }
      const empty = v => v // in case one of the callbacks isn't defined
      timeline.direction || trackDirection(timeline) // make sure direction tracking is enabled on the timeline
      start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start)
      end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end)
    }
  }
})
</script>

<style scoped>
  .container {
    width: 600%;
  }

  * {
    overflow-x: hidden;
  }
</style>
