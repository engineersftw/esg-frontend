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
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
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
    <v-footer color="indigo" :app="false">
      <v-layout justify-center align-center row wrap>
        <v-flex xs12 class="text-xs-center">
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
