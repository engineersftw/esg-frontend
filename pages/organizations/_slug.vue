<template>
  <v-content>
    <v-container fill-height>
      <!-- <v-layout row wrap>
      </v-layout> -->
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Alpha Camp</h1>
          <h2>Latest Video</h2>
        </v-flex>
        <v-flex md8 sm12>
          <v-layout row wrap>
            <v-flex xs12 class="pa-1">
              <latest-video-card />
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md4 sm12>
          <v-layout row wrap>
            <v-flex xs12 class="pa-1">
              <organization-detail-card />
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import LatestVideoCard from '~/components/LatestVideoCard.vue'
import OrganizationDetailCard from '~/components/OrganizationDetailCard.vue'

export default {
  components: {
    LatestVideoCard,
    OrganizationDetailCard
  }
}
</script>

<style scoped>
</style>
