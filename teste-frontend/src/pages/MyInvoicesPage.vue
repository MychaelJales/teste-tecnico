<template>
  <div class="container-page">
    <my-side-bar />
    <my-invoices />
  </div>
</template>

<script>
import MySideBar from '@/components/MySideBar.vue';
import MyInvoices from '@/components/MyInvoices.vue';

export default {
  name: 'MyInvoicesPage',
  components: {
    MySideBar,
    MyInvoices,
  },
  data() {
    return {
    }
  }
}
</script>
<style>
.container-page {
  display: flex;
  flex-direction: row;
}
</style>