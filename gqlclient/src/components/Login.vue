<template>
  <div>
    <h1>Login</h1>
    <form @submit="handleSubmit">
      <p><input type="text" v-model="username" autocomplete="on" placeholder="Username" /></p>
      <p><input type="password" v-model="password" autocomplete="on" placeholder="Password" /></p>
      <p v-if="error" style="color:red">Invalid credentials provided</p>
      <p><button>Login</button></p>
    </form>
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
      error: undefined
    }
  },
  methods: {
    handleSubmit (event) {
      if (event)
        event.preventDefault()
      this.$apollo.mutate({
        mutation: gql`mutation ($username: String!, $password: String!) {
          login(username: $username, password: $password)
        }`,
        variables: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        this.error = undefined
        const token = res.data.login
        localStorage.setItem('token', token)
        this.$router.push('/userfetcher')
        this.$router.go()
      }).catch(err => {
        this.error = err
      })
    }
  }
}
</script>
