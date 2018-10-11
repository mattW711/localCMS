<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      :clipped="$vuetify.breakpoint.mdAndUp"
      app
      v-model="drawer"
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :to="item.to" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">{{title}}</span>
        <span class="hidden-lg-and-up">{{pageTitle}}</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <!--<v-btn icon>-->
      <!--<v-icon>apps</v-icon>-->
      <!--</v-btn>-->
      <!--<v-btn icon>-->
      <!--<v-icon>notifications</v-icon>-->
      <!--</v-btn>-->
      <v-tooltip bottom>
        <v-btn @click="logout" icon large slot="activator">
          <v-icon>exit_to_app</v-icon>
        </v-btn>
        <span>Logout</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo () {
      return {
        title: 'Home',
        changed (meta) {
          this.$store.dispatch('page/setTitle', meta.titleChunk)
        },
        titleTemplate: (title) => {
          return title ? `${title} - ${this.title}` : this.title
        }
      }
    },
    computed: {
      ...mapGetters('page', {
        pageTitle: 'title'
      })
    },
    data: () => ({
      drawer: null,
      title: 'Vue.js CMS Starter',
      items: [
        {
          icon: 'home',
          text: 'Dashboard',
          to: '/'
        },
        {
          icon: 'person',
          text: 'Users',
          to: '/users'
        },
        {
          icon: 'tab',
          text: 'Tabs',
          to: '/tabs/one'
        }
//        ,
//        {
//          icon: 'settings',
//          text: 'Settings',
//          to: '/settings'
//        },
//        {
//          icon: 'keyboard_arrow_up',
//          'icon-alt': 'keyboard_arrow_down',
//          text: 'More',
//          model: false,
//          children: [
//            {text: 'Import'},
//            {text: 'Export'},
//            {text: 'Print'},
//            {text: 'Undo changes'},
//            {text: 'Other contacts'}
//          ]
//        }
      ]
    }),
    methods: {
      logout () {
        this.$store.dispatch('auth/logout').then(() => {
          this.$router.push('/login')
        })
      }
    }
  }
</script>
