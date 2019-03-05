<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Presenter: April Kwong {{ $route.params.slug }}</h1>
          <v-img
            width="200px"
            src="https://pbs.twimg.com/profile_images/378800000325798111/ca48276f8ebbbbac9c6ce83aac3c8548_200x200.jpeg"
          />
          <p>
            "Cum Laude" Graduate at university and an accomplished PM having
            completed her Project Management Professional course at SP Pace
            Academy. A 7 year developer of PHP who is now working as a Project
            Manager in FunctionEight. She has developed and maintained many of
            the chamber of commerce websites in Singapore and Hong Kong such as
            British Chamber of Commerce for both. In addition, she is currently
            managing a fintech start-up which is a crowdfunding website for
            female entrepreneurs and women-owned businesses.
          </p>
          <v-btn small>Follow @araphoenix</v-btn>
          <p>
            Website:
            <a href="https://aralovelace.com" target="_blank"
              >https://aralovelace.com</a
            >
          </p>
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
