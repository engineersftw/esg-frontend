<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
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
      <v-toolbar-title>Engineers.SG</v-toolbar-title>
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
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            <v-tooltip left>
              <v-btn slot="activator" :href="source" icon large target="_blank">
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank">
                <v-icon large>mdi-codepen</v-icon>
              </v-btn>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> -->
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
