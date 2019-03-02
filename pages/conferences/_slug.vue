<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>iOS Conference SG 2019 {{ $route.params.slug }}</h1>
          <h2>18 videos found</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex lg4 md6 sm12 class="pa-1">
          <presenter-video-card />
        </v-flex>
        <v-flex lg4 md6 sm12 class="pa-1">
          <presenter-video-card />
        </v-flex>
        <v-flex lg4 md6 sm12 class="pa-1">
          <presenter-video-card />
        </v-flex>
        <v-flex lg4 md6 sm12 class="pa-1">
          <presenter-video-card />
        </v-flex>
        <v-flex lg4 md6 sm12 class="pa-1">
          <presenter-video-card />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
// should use own video card, just without presenter icon...
import PresenterVideoCard from '~/components/PresenterVideoCard.vue'

export default {
  components: {
    PresenterVideoCard
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
