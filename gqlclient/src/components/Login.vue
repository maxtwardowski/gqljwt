<template>
  <div>
    <h1>Login</h1>
    <form @submit="change">
      <p><input type="text" v-model="username" autocomplete="on" placeholder="Username" /></p>
      <p><input type="password" v-model="password" autocomplete="on" placeholder="Password" /></p>
      <p><button>Login</button></p>
    </form>
    {{ lol }}
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      lol: 'pre'
    }
  },
  apollo: {
    test: gql`{
      test
    }`
  },
  methods: {
    change () {
      this.$apollo.query(test)
      this.test = this.lol
    }
  }
}
</script>
