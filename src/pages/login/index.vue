<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-form @submit.prevent="login">
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-alert v-if="error && error.message" class="ma-2" type="error" :value="true">
                  {{error.message}}
                </v-alert>
                <v-card-text>
                  <v-text-field v-model="email" prepend-icon="person" name="email" label="Email"
                    type="text"></v-text-field>
                  <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" id="password"
                    type="password"></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn :disabled="loading" :loading="loading" type="submit" color="primary">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      email: '',
      password: ''
    }),
    computed: {
      ...mapGetters('auth', {
        loading: 'isLoading',
        error: 'error'
      }),
      nextUri () {
        return this.$route.query.next || '/'
      }
    },
    methods: {
      async login () {
        const res = await this.$store.dispatch('auth/login', this.$data)
        if (res) {
          this.$router.push(this.nextUri)
        }
      }
    }
  }
</script>
