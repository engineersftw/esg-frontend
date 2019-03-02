<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Presenters</h1>
          <p>The presenters we recorded.</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <!-- <v-flex v-for="index in 10" :key="index" xs12 sm6 md4 :class="index % 3 == 0 ? 'py-3' : index % 3 == 1 ? 'py-3' : 'py-3 px-4'"> -->
        <v-flex v-for="index in 10" :key="index" xs6 sm4 md3 class="pa-2">
          <v-card>
            <v-toolbar color="indigo" dark dense>
              <nuxt-link :to="`/presenters/${index}`"><v-toolbar-title>Some One</v-toolbar-title></nuxt-link>
            </v-toolbar>
            <v-container fill-height>
              <v-layout align-center justify-center>
                <v-img
                  width="auto"
                  src="https://pbs.twimg.com/profile_images/378800000325798111/ca48276f8ebbbbac9c6ce83aac3c8548_200x200.jpeg"
                />
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
a {
  color: white;
  text-decoration: none;
}
</style>
