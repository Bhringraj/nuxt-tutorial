<template>
  <div>
    <!-- <subscribe /> -->
    <landing class="mb-5" />
    <slider />
    <!-- <h1
      v-anime="{
        translateX: 270,
        direction: 'alternate',
        loop: true,
        duration: 2000,
        easing: function(el, i, total) {
          return function(t) {
            return Math.pow(Math.sin(t * (i + 1)), total);
          }
        }
      }"
    >
      Hello Nuxters! 👋
    </h1>
    <carousel
      v-anime="{
        translateX: -70,
        direction: 'alternate',
        loop: true,
        duration: 2000,
        easing: function(el, i, total) {
          return function(t) {
            return Math.pow(Math.sin(t * (i + 1)), total);
          }
        }
      }"
      :slides="slides"
    /> -->
  </div>
</template>

<script>
// import carousel from '../components/carousel/carousel.vue'
export default {
  components: {
    // carousel
  },
  data: () => ({
    slides: [
      {
        url: 'https://picsum.photos/id/1032/1000/450',
        header: 'First header',
        text: 'lorem ipsum canta goping tulantu Khalreiden busto krishna buba'
      },
      {
        url: 'https://picsum.photos/id/1032/1000/450',
        header: 'First header',
        text: 'lorem ipsum canta goping tulantu Khalreiden busto krishna buba'
      },
      {
        url: 'https://picsum.photos/id/1035/1000/450',
        header: 'Second header',
        text: 'lorem ipsum canta goping tulantu Khalreiden busto krishna buba'
      },
      {
        url: 'https://picsum.photos/id/1037/1000/450',
        header: 'Third header',
        text: 'lorem ipsum canta goping tulantu Khalreiden busto krishna buba'
      },
      {
        url: 'https://picsum.photos/id/1038/1000/450',
        header: 'Fourth header',
        text: 'lorem ipsum canta goping tulantu Khalreiden busto krishna buba'
      },
      {
        url: 'https://picsum.photos/id/1039/1000/450',
        header: 'Fifth header',
        text: 'lorem ipsum canta goping tulantu Khalreiden busto krishna buba'
      },
      {
        url: 'https://picsum.photos/id/1031/1000/450',
        header: 'Sixth header',
        text: 'lorem ipsum canta goping tulantu Khalreiden busto krishna buba'
      }
      // {
      //   id: 1,
      //   url: 'https://picsum.photos/id/1032/1000/450'
      // },
      // {
      //   id: 2,
      //   url: 'https://picsum.photos/id/1033/1000/450'
      // },
      // {
      //   id: 3,
      //   url: 'https://picsum.photos/id/1038/1000/450'
      // },
      // {
      //   id: 4,
      //   url: 'https://picsum.photos/id/1035/1000/450'
      // },
      // {
      //   id: 5,
      //   url: 'https://picsum.photos/id/1036/1000/450'
      // }
    ]
  })
}
</script>
