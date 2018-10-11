<template>
  <v-card class="mt-4">
    <v-card-title>
      Users
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-btn @click="adding = true" circle absolute top small right fab color="primary">
      <v-icon>add</v-icon>
    </v-btn>
    <v-data-table
      v-bind:headers="headers"
      v-bind:items="items"
      v-bind:search="search"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          <v-avatar class="mt-3 mb-3">
            <img :src="props.item.avatar" alt="Avatar">
          </v-avatar>
        </td>
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
        <td class="text-xs-center">
          <v-menu offset-y left>
            <v-btn link color="white" light small fab slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile @click="view(props.item)">
                <v-list-tile-title>
                  <v-icon>search</v-icon>
                  View
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="edit(props.item)">
                <v-list-tile-title>
                  <v-icon>edit</v-icon>
                  Edit
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="openRemoveDialog(props.item)">
                <v-list-tile-title>
                  <v-icon>delete</v-icon>
                  Delete
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
    <!-- dialog -->
    <v-dialog v-model="viewing" max-width="468px">
      <v-card v-if="user">
        <v-card-media src="http://via.placeholder.com/200x200" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h1 class="headline mb-0">{{user.name}}</h1>
            <h3 class="grey--text ml-0">{{user.email}}</h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-layout justify-center>
            <v-btn flat color="primary" @click="closeModalDetail">Close</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="deleting" max-width="500px">
      <v-card>
        <v-card-title>Delete User</v-card-title>
        <v-card-text>Are you sure want to delete this user?</v-card-text>
        <v-card-actions>
          <v-layout justify-center>
            <v-btn flat color="error" @click="remove">Remove</v-btn>
            <v-btn flat color="secondary" @click="deleting = false">Cancel</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="editing" max-width="768px">
      <v-card>
        <v-card-title>Edit User</v-card-title>
        <v-card-text>
          <div v-if="user">
            <v-text-field
              label="Name"
              v-model="user.name"
              required
            ></v-text-field>
            <v-text-field
              label="Email"
              v-model="user.email"
              required
              type="email"
            ></v-text-field>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-layout justify-center>
            <v-btn flat color="primary" @click="update">Save</v-btn>
            <v-btn flat color="secondary" @click="editing = false">Cancel</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="adding" max-width="768px">
      <v-card>
        <v-card-title>Add New User</v-card-title>
        <v-card-text>
          <div v-if="user">
            <v-text-field
              label="Name"
              v-model="user.name"
              required
            ></v-text-field>
            <v-text-field
              label="Email"
              v-model="user.email"
              required
              type="email"
            ></v-text-field>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-layout justify-center>
            <v-btn flat color="primary" @click="save">Save</v-btn>
            <v-btn flat color="secondary" @click="adding = false">Cancel</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    metaInfo: {
      title: 'Users'
    },
    data () {
      return {
        viewing: false,
        user: {
          name: '',
          email: '',
          avatar: ''
        },
        deleting: false,
        editing: false,
        adding: false,
        tmp: '',
        search: '',
        pagination: {},
        headers: [
          {
            text: 'Avatar',
            value: 'avatar',
            align: 'left',
            sortable: false
          },
          {
            text: 'Name',
            value: 'name',
            align: 'left'
          },
          {
            text: 'Email',
            value: 'email',
            align: 'left'
          },
          {
            text: 'Action',
            value: 'action',
            align: 'center',
            sortable: false
          }
        ]
      }
    },
    computed: {
      ...mapGetters('users', {
        items: 'getUsers'
      })
    },
    watch: {
      'editing' (to) {
        this.cancel(to)
      },
      'viewing' (to) {
        this.cancel(to)
      },
      'deleting' (to) {
        this.cancel(to)
      }
    },
    methods: {
      resetForm () {
        this.user = {
          name: '',
          email: '',
          avatar: ''
        }
      },
      cancel (to) {
        if (to === false) {
          this.resetForm()
        }
      },
      view (user) {
        this.viewing = true
        this.user = user
      },
      closeModalDetail () {
        this.viewing = false
        this.user = null
      },
      openRemoveDialog (user) {
        this.user = user
        this.deleting = true
      },
      remove () {
        const index = this.items.indexOf(this.user)
        this.items.splice(index, 1)
        this.deleting = false
      },
      edit (user) {
        this.editing = true
        this.user = user
      },
      update () {
        const index = this.items.indexOf(this.user)
        this.items[index] = this.user
        this.editing = false
      },
      save () {
        this.user.avatar = 'http://via.placeholder.com/480x200'
        this.user.id = this.items.length + 1
        this.items.push(this.user)
        this.resetForm()
        this.adding = false
      }
    }
  }
</script>
