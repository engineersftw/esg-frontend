<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile v-for="item in menuItems" :key="item.name">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="red--text"><nuxt-link to="/">Engineers.SG</nuxt-link></v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-tooltip v-for="item in menuItems" :key="'menuitem-'+item.name" bottom :disabled="$vuetify.breakpoint.lgAndUp">
          <template #activator="data">
            <v-btn flat nuxt :to="item.to" v-on="data.on">
              <v-icon left>{{ item.icon }}</v-icon><span class="hidden-md-and-down">{{ item.name }}</span>
            </v-btn>
          </template>
          <span>{{ item.name }}</span>
        </v-tooltip>
        <!-- <v-btn flat nuxt to="/conferences">
          <v-icon left>assignment</v-icon>Conferences
        </v-btn> -->
        <v-btn icon nuxt to="/videos">
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon nuxt to="/support">
          <v-icon>loyalty</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <nuxt />
    <!-- <v-content>
      <v-container fluid>
        <v-layout row wrap color="blue">
          <v-flex lg3 md4 sm6 xs12>
            <span class="white--text">Engineers.SG is a community initiative by Code Craft Pte Ltd (ACRA: 200706071C)</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> -->
    <!-- <v-footer
      dark
      height="auto"
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>
        <v-divider />
        <v-card-text class="white--text">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->
    <v-footer
      color="indigo"
      :app="false"
      height="auto"
    >
      <v-layout justify-center row wrap>
        <v-flex xs12>
          <v-layout justify-center align-top row wrap class="pt-2 px-2">
            <v-flex lg2 sm4 xs12 text-xs-center>
              <h2 class="white--text">Navigation</h2>
              <p>
                <nuxt-link :to="`/about`">About Us</nuxt-link><br>
                <a href="https://blog.engineers.sg">Blog</a><br>
                <nuxt-link :to="`/videos`">Videos</nuxt-link><br>
                <nuxt-link :to="`/conferences`">Conferences</nuxt-link><br>
                <nuxt-link :to="`/support`">Support Us</nuxt-link><br>
                <nuxt-link :to="`/events`">Events</nuxt-link><br>
                <nuxt-link :to="`/bookings`">Book Us</nuxt-link><br>
              </p>
            </v-flex>
            <v-flex lg2 sm4 xs12 text-xs-center>
              <h2 class="white--text">Community Sites</h2>
              <p>
                <a href="http://webuild.sg/">WeBuild.SG</a><br>
                <a href="http://kopijs.org/">KopiJS</a><br>
                <a href="http://geekbrunch.sg/">GeekBrunch.SG</a><br>
                <a class="grey-text text-lighten-3" href="https://www.engineers.sg/feed" title="ATOM Feed">
                  <img src="/feed-icon-28x28-473feba11f89b4d197a2263ebb6567e53b75a969cff0679ccf50f6634fa3a4f5.png" alt="Feed icon 28x28">
                </a><br>
                <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-follow-button twitter-follow-button-rendered" style="position: static; visibility: visible; width: 167px; height: 28px;" title="Twitter Follow Button" src="https://platform.twitter.com/widgets/follow_button.704fca4914c9b90d7a9d41abcaa19933.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=engineersftw&amp;show_count=false&amp;show_screen_name=true&amp;size=l&amp;time=1551610557105" data-screen-name="engineersftw" />
              </p>
            </v-flex>
            <v-flex lg2 sm4 xs12 text-xs-center>
              <a class="twitter-timeline" data-width="240" data-height="400" href="https://twitter.com/engineersftw?ref_src=twsrc%5Etfw">Tweets by engineersftw</a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 class="black text-xs-center py-2">
          <span class="white--text">AA Engineers.SG is a community initiative by Code Craft Pte Ltd (ACRA: 200706071C)</span>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    menuItems: [
      {
        name: 'Videos',
        icon: 'video_library',
        toolTip: 'Videos',
        to: '/videos'
      },
      {
        name: 'Conferences',
        icon: 'assignment',
        toolTip: 'Conferences',
        to: '/conferences'
      },
      {
        name: 'Organizations',
        icon: 'event',
        toolTip: 'Organizations',
        to: '/organizations'
      },
      {
        name: 'Presenters',
        icon: 'account_circle',
        toolTip: 'Presenters',
        to: '/presenters'
      },
      {
        name: 'Events',
        icon: 'event',
        toolTip: 'Events',
        to: '/events'
      }
    ]
  })
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
