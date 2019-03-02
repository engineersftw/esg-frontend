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
          <v-card flat>
            <v-container fluid fill-height class="pa-0">
              <v-layout align-center justify-center row wrap>
                <v-flex xs12 class="py-2">
                  <nuxt-link class="card-title" :to="`/conferences/${index}`">iOS Conference SG 2019</nuxt-link>
                </v-flex>
                <v-flex xs12>
                  <nuxt-link :to="`/conferences/${index}`">
                    <v-img
                      width="auto"
                      src="https://i.ytimg.com/vi/7P1KucwZ0A0/hqdefault.jpg"
                    />
                  </nuxt-link>
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
a {
  text-decoration: none;
}

.card-title {
  text-decoration: none;
  font-size: 1.64rem;
  font-weight: 400;
  line-height: 110%;
  margin: 0.82rem 0 0.656rem 0;
}
</style>
