<template>
  <v-content>
    <v-container fill-height>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Welcome To Engineers.sg</h1>
          <h1>Latest Videos</h1>
        </v-flex>
        <v-flex md8 sm12 class="px-1">
          <latest-video-item />
        </v-flex>
        <v-flex md4 sm12 class="px-1">
          <latest-event-item />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import LatestVideoItem from '~/components/LatestVideoItem.vue'
import LatestEventItem from '~/components/LatestEventItem.vue'

export default {
  components: {
    LatestVideoItem,
    LatestEventItem
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
