<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Conferences</h1>
          <p>We have been actively involved in recording local tech conferences too.</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <!-- <v-flex v-for="index in 10" :key="index" xs12 sm6 md4 :class="index % 3 == 0 ? 'py-3' : index % 3 == 1 ? 'py-3' : 'py-3 px-4'"> -->
        <v-flex v-for="index in 10" :key="index" xs12 sm6 md4 class="pa-2">
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="https://i.ytimg.com/vi/7P1KucwZ0A0/hqdefault.jpg"
            >
              <!-- <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container> -->
            </v-img>
            <v-card-title primary-title>
              <div>
                <div class="headline"><nuxt-link :to="`/conferences/${index}`">iOS Conference SG 2019</nuxt-link></div>
                <span class="grey--text">Sub Title</span>
              </div>
            </v-card-title>
            <!-- <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions> -->
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
