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
          <h1>Support</h1>

          <a
            class="sc-hMqMXs bQQHMC"
            color="primary"
            tabindex="0" type="button"
            href="https://www.patreon.com/bePatron?u=752396&amp;redirect_uri=https%3A%2F%2Fengineers.sg%2F&amp;utm_medium=widget"
            role="button"
            target="_blank"
          >
            <div class="sc-cSHVUG bDCJxk" display="flex">
              <div class="sc-ckVGcZ hnTNrw">
                <span class="sc-dxgOiQ ZmzLr">
                  <svg viewBox="0 0 569 546" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle data-fill="1" id="Oval" cx="362.589996" cy="204.589996" r="204.589996"></circle>
                    <rect data-fill="2" id="Rectangle" x="0" y="0" width="100" height="545.799988"></rect>
                  </g>
                  </svg>
                </span>
              </div>
            <div class="sc-hSdWYo gBDeVU">
            </div>
            <div class="button-text">Become a patron</div>
            </div>
          </a>
          <h1>Events</h1>
          <p>WeBuild.SG is a list of free open events and open source libraries for the curious folks who love to make things!</p>
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
