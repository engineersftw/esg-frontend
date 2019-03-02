<template>
  <v-card light>
    <div class="aspect-ratio">
      <iframe
        allowfullscreen=""
        frameborder="0"
        src="https://www.youtube.com/embed/v3XStim6iu8?modestbranding=1&amp;rel=0&amp;ytp-pause-overlay=0"
        width="100%"
      />
    </div>
    <!-- <v-img
      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      aspect-ratio="2.75"
    /> -->
    <v-card-title primary-title>
      <div>
        <div class="headline mb-0">Kangaroo Valley Safari</div>
        <span class="grey--text">Thursday, 28 February 2019</span>
        <div>
          <v-btn small>14 views</v-btn> <v-btn small><v-icon left>event</v-icon> Tweet</v-btn>
        </div>
        <p>
          Speaker: Donaldson Tan<br>
          Discover how to program critical network functions with Software-Defined Networking using Go.<br>
          Donaldson is the founder at Shukra Networks, a startup working in Software Defined Wide Area Networking.<br>
          Event Page: <a style="color: black;" href="https://www.meetup.com/golangsg/events/258485148/" target="_blank">https://www.meetup.com/golangsg/events/258485148/</a><br>
          Produced by Engineers.SG<br>
          Recorded by: Michael Cheng<br>
          Help us caption & translate this video!<br>
          <a style="color: black;" href="https://amara.org/v/nq5u/" target="_blank">https://amara.org/v/nq5u/</a>
        </p>
      </div>
    </v-card-title>
    <!-- <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {}
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
