<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Organizations</h1>
          <p>The local tech and startup communities that we support.</p>
          <h2>TODO: handle no picture</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <!-- <v-flex v-for="index in 10" :key="index" xs12 sm6 md4 :class="index % 3 == 0 ? 'py-3' : index % 3 == 1 ? 'py-3' : 'py-3 px-4'"> -->
        <v-flex v-for="index in 10" :key="index" xs6 sm4 md3 class="pa-2">
          <v-card>
            <v-container fill-height>
              <v-layout align-center justify-center row wrap>
                <v-flex xs12>
                  <nuxt-link class="card-title" :to="`/organizations/${index}`">Some Org</nuxt-link>
                </v-flex>
                <v-flex xs12>
                  <v-img
                    width="auto"
                    src="https://secure.meetupstatic.com/photos/event/3/6/2/1/highres_462793857.jpeg"
                  />
                </v-flex>
              </v-layout>
            </v-container>
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
.card-title {
  text-decoration: none;
  font-size: 1.64rem;
  font-weight: 400;
  line-height: 110%;
  margin: 0.82rem 0 0.656rem 0;
}
</style>
