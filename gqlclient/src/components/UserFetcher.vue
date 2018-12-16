<template>
  <div>
    <h1>User fetcher</h1>
    <button @click="handleFetch">Fetch users</button>
    <p v-if="error" style="color:red">You need to be authenticated</p>
    <ul>
      <li v-for="user in usersData">
        <p>ID: {{ user.id }}</p>
        <p>Username: {{ user.username }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'UserFetcher',
  data () {
    return {
      usersData: [],
      error: undefined
    }
  },
  methods: {
    handleFetch () {
      const usersQuery = gql`query {
        users {
          id
          username
        }
      }`

      this.$apollo.query({
        query: usersQuery,
        headers: {
          authorization: localStorage.getItem('token')
        }
      }).then(res => {
        this.usersData = res.data.users
      }).catch(err => {
        this.error = err
      })
    }
  }
}
</script>
