<template>
  <v-content>
    <v-container fill-height>
      <!-- <v-layout row wrap>
      </v-layout>-->
      <v-layout row wrap>
        <v-flex xs12>
          <h1>Welcome To Engineers.sg</h1>
        </v-flex>
        <v-flex md8 sm12>
          <h2>Latest Videos</h2>
          <v-layout row wrap>
            <v-flex xs12 class="pa-1">
              <latest-video-card />
            </v-flex>
            <v-flex xs12 class="pa-1">
              <latest-video-card />
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md4 sm12>
          <h2>Support</h2>
          <v-btn
            dark
            color="#f96854"
            href="https://www.patreon.com/bePatron?u=752396&redirect_uri=https%3A%2F%2Fengineers.sg%2F&utm_medium=widget"
            target="_blank"
          >
            <v-avatar size="24px"> <img src="/patreon-dark.png" /> </v-avatar
            >Become A Patreon
          </v-btn>
          <h2>Events</h2>
          <p>
            <a class="we-build" href="https://webuild.sg" target="_blank"
              >WeBuild.SG</a
            >
            is a list of free open events and open source libraries for the
            curious folks who love to make things!
          </p>
          <v-layout row wrap>
            <v-flex xs12 class="pa-1">
              <latest-event-item />
            </v-flex>
            <v-flex xs12 class="pa-1">
              <latest-event-item />
            </v-flex>
            <v-flex xs12 class="pa-1">
              <latest-event-item />
            </v-flex>
            <v-flex xs12 class="pa-1">
              <!-- graphql -->
              <!-- <div v-for="post in posts" :key="post.id">
                {{ post.title }}
              </div> -->
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import LatestVideoCard from '~/components/LatestVideoCard.vue'
import LatestEventItem from '~/components/LatestEventItem.vue'
import gql from 'graphql-tag'

export default {
  // apollo: {
  //   posts: gql`
  //     {
  //       posts {
  //         id
  //         title
  //         body
  //       }
  //     }
  //   `
  // },
  components: {
    LatestVideoCard,
    LatestEventItem
  },
  mounted() {
    // // receive the associated Apollo client
    // const client = this.$apollo.getClient()
    // // most likely you would call mutations like following:
    // this.$apollo.mutate({mutation, variables})
    // Static parameters
    // const variables = {
    //   message: 'Meow',
    // },

    // BELOW SHOULD WORK
    // const query = gql`
    //   query {
    //     users {
    //       id
    //       name
    //     }
    //   }
    // `
    // this.$apollo
    //   .query({ query })
    //   .then(({ data }) => {
    //     console.log('gqlxxx', data)
    //   })
    //   .catch(err => console.log('ERRR', err))
  }
}
</script>

<style scoped>
a.we-build {
  color: #0088ff;
}
</style>
