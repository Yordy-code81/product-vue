<template>
    <v-app>
      <v-app-bar color="#009443" absolute app shrink-on-scroll prominent src="https://i.picsum.photos/id/89/4608/2592.jpg?hmac=G9E4z5RMJgMUjgTzeR4CFlORjvogsGtqFQozIRqugBk" fade-img-on-scroll scroll-target="#scrolling-techniques-5" scroll-threshold="500" dark>
        <v-app-bar-nav-icon v-if="val" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="font-weight-bold my-auto"><v-icon class="mr-1 py-1">mdi-basket</v-icon>Agrochilling</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="val" depressed outlined rounded class="text-capitalize mx-1" to="/profile">Profile<v-icon class="ml-2">mdi-account-circle</v-icon></v-btn>
        <v-btn v-if="val" depressed outlined rounded class="text-capitalize mx-1" @click="logOut">Log out<v-icon class="ml-2">mdi-logout-variant</v-icon></v-btn>
        <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      </v-app-bar>

      <v-navigation-drawer v-if="val" v-model="drawer" dark absolute bottom temporary color="#009b48">

        <v-list-item align="center">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">Side Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense rounded>
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/products">
            <v-list-item-icon>
              <v-icon>mdi-bullhorn</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Search Products</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/register-product">
            <v-list-item-icon>
              <v-icon>mdi-human-queue</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Create Product</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/products-offer">
            <v-list-item-icon>
              <v-icon>mdi-podium-gold</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <v-main>
        <router-view/>
      </v-main>

      <!--<v-footer color="#009443" padless align="center">
        <v-card-title dark class="mx-auto my-0">
          <p class="subheading my-auto pr-10" style="color:white">Hi we are CyberSoft!</p>

          <v-spacer></v-spacer>
          <v-btn class="mx-2 white--text" href="https://www.facebook.com/" target="_blank" icon>
            <v-icon size="24px">
              mdi-facebook
            </v-icon>
          </v-btn>
          <v-btn class="mx-2 white--text" href="https://www.instagram.com/" target="_blank" icon>
            <v-icon size="24px">
              mdi-instagram
            </v-icon>
          </v-btn>
          <v-btn class="mx-2 white--text" href="https://www.twitter.com/" target="_blank" icon>
            <v-icon size="24px">
              mdi-twitter
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="white--text pt-0 pb-2">
          2022 — <strong>Vuetify</strong>
        </v-card-text>
      </v-footer>-->

    </v-app>
</template>

<script>

import router from "@/router";

export default {
    name: "main-view",
    data: () => ({
    drawer: false,
    group: null,
    val: true,
    typeUser: '',
  }),

  updated() {
    this.val = this.$store.state.authenticated;
    this.typeUser = localStorage.getItem('typeUser')
  },

  mounted() {
    if(!localStorage.getItem('user')){
      this.val = false;
      router.push("/sign-up");
    }
  },
  
  methods:{
    logOut() {
      localStorage.removeItem('user');
      localStorage.removeItem('typeUser');
      this.$store.dispatch('changeAuthenticatedFalseAction');
      router.push("/log-in")
    }
  },
  
  watch: {
    group () {
      this.drawer = false
    },
  },

  /*computed: {
    mini() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return true
        case 'md': return true
        case 'lg': return false
        case 'xl': return false
      }
    }
  }*/
}
</script>