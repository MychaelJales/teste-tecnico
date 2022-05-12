<template>
  <div class="left-bar">
    <div class="row">
      <img class="logo" src="../assets/Logo.svg" alt="Logo e o nom CashForce escrito">
    </div>
    <div class="row menu">
      <img class="menu-icon" src="../assets/menu-item.svg" alt="icone do menu">
      <p class="menu-text">Notas fiscais</p>
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
  width: 100px;
  padding: 15px;
}

.menu {
  border-left: #00AD8C solid 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  height: 40px;
}

.menu-icon {
  height: 10px;
  padding: 5px;
}

.menu-text {
  font-size: 12px;
  color: #00AD8C;
}
</style>