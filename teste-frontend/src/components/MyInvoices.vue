<template>
  <div class="container">
    <div class="top-bar"></div>
    <div class="container-body">
      <div class="header-container">
        <div>
          <img class="header-icon" src="../assets/header-icon.svg" alt="icone do menu">
          <p class="header-text">Notas fiscais</p>
        </div>
        <p class="text-subtitle">Visualize as notas fiscais que você tem.</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>NOTA FISCAL</th>
            <th>SACADO</th>
            <th>CEDENTE</th>
            <th>EMISSÃO</th>
            <th>VALOR</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyInvoices',
  data() {
    return {

    }
  }
}
</script>
<style scoped>
.container {
  width: 81vw;
  background: #FFFFFF;
  box-shadow: 0px 10px 30px rgba(225, 229, 236, 0.5);
  border-radius: 15px 0px 0px 15px;
}

.top-bar {
  height: 7vh;
  border-bottom: 1px solid #DFE2EB;
}

.header-container div{
  display: flex;

  flex-direction: row;

  align-items: center;
  justify-content: left;
}

.header-container {
  height: 20px;
  padding: 20px;
}

.header-text {
 font-style: normal;
  font-weight: 700;
  color: #021B51;
  font-size: 12px;
  padding-right: 4px;
}

.header-icon {
  height: 10px;
  padding-right: 4px;
}

.text-subtitle {
  padding-top: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  color: #727D94;
}

table {
  padding-left: 20px;
  padding-right: 20px;
}

th {
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  color: #A1A8B8;
  padding-left: 10px;
  padding-right: 40px;
}
</style>