<template>
  <div class="left-bar">
    <div class="row">
      <img class="logo" src="../assets/Logo.svg" alt="Logo e o nom CashForce escrito">
    </div>
    <div class="row menu">
      <img class="menu-icon" src="../assets/menu-item.svg" alt="icone do menu">
      <a href="/" class="menu-text">Notas fiscais</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySideBar',
  data() {
    return {

    }
  }
}
</script>
<style>
.left-bar {
  height: 100vh;
  width: 19vw;
  background: #FBFDFE;
}

.logo {
  width: 80px;
  padding: 10px;
}

.menu {
  border-left: #00AD8C solid 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  height: 35px;
}

.menu-icon {
  height: 8px;
  padding: 5px;
}

.menu-text {
  font-size: 9px;
  text-decoration: none;
  color: #00AD8C;
}
</style>