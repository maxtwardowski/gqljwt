<template>
  <div>
    <p v-if="authCheck" style="color:green">Authenticated</p>
    <p v-else style="color:red">Unauthenticated</p>
  </div>
</template>

<script>
export default {
  name: 'Status',
  computed: {
    authCheck: () => {
      if (localStorage.getItem('token'))
        return true
      return false
    }
  }
}
</script>
