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
        <div class="headline mb-0"><a class="video-title" href="/videos/1">Women in Dev - PHP Women Asia (International Women's Day Edition) - Singapore PHP User Group</a></div>
        <span class="grey--text">Thursday, 28 February 2019</span>
        <div>
          <v-btn class="ml-0 mb-0" color="indigo white--text" small>14 views</v-btn>
        </div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn light flat href="https://engineers.sg/organization/31" target="_blank">
        <v-avatar class="pr-2" size="24px">
          <img src="https://pbs.twimg.com/profile_images/593598457736077312/i3YmDn_o.jpg">
        </v-avatar> Singapore PHP
      </v-btn>
      <v-btn light flat href="https://engineers.sg/s/araphoenix" target="_blank">
        <v-avatar class="pr-2" size="24px">
          <img src="https://pbs.twimg.com/profile_images/1035947551973953536/zUdz6cNJ_200x200.jpg">
        </v-avatar>April Kwong
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped>
a.video-title {
  color: black;
  text-decoration: none;
}

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
