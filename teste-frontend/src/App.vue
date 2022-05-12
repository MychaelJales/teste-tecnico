<template>
  <my-invoices-page />
</template>

<script>
import MyInvoicesPage from './pages/MyInvoicesPage.vue'

export default {
  name: 'App',
  components: {
    MyInvoicesPage
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'DM Sans';
  font-weight: 500;
  letter-spacing: 0em;
}
</style>
