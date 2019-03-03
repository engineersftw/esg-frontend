<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>iOS Panel Discussion - Global Diversity CFP Day SG 2019 {{ $route.params.slug }}</h1>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <latest-video-card />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// should use own video card, just without presenter icon...
import LatestVideoCard from '~/components/LatestVideoCard.vue'

export default {
  components: {
    LatestVideoCard
  },
  mounted() {
    console.log(this.$route.params.slug)
  }
}
</script>

<style scoped>
.aspect-ratio {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 51%;
}

.aspect-ratio iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
