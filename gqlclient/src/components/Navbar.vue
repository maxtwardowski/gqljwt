<template>
  <div>
    <router-link to='/userfetcher'>User fetcher </router-link>
    <router-link to='/logout' v-if="authCheck">Logout </router-link>
    <router-link to='/login' v-else>Login </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    authCheck: () => {
      if (localStorage.getItem('token'))
        return true
      return false
    }
  }
}
</script>
