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
      <div class="table">
        <div class="table-head">
          <div class="row-head">
            <div class="col-head">
              <p>NOTA FISCAL</p>
            </div>
            <div class="col-head">
              <p>SACADO</p>
            </div>
            <div class="col-head">
              <p>CEDENTE</p>
            </div>
            <div class="col-head">
              <p>EMISSÃO</p>
            </div>
            <div class="col-head">
              <p>VALOR</p>
            </div>
            <div class="col-head">
              <p>STATUS</p>
            </div>
            <div class="col-head">
            </div>
          </div>
        </div>
        <div class="table-body">
          <div class="row-body" v-for="(order, i) in orders" :key="i">
            <div class="col-body">
              <p>{{ order['nNf'] }}</p>
            </div>
            <div class="col-body">
              <p>{{ order['buyers'].name }}</p>
            </div>
            <div class="col-body">
              <p>{{ order['providers'].name }}</p>
            </div>
            <div class="col-body">
              <p>{{ formatData(order['emissionDate']) }}</p>
            </div>
            <div class="col-body font-green">
              <p>{{ formatValue(order['value']) }}</p>
            </div>
            <div class="col-body font-green">
              <p>{{ formatStatus(order['orderStatusBuyer']) }}</p>
            </div>
            <div class="col-body col-button">
              <button>Dados do cedente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyInvoices',
  data() {
    return {
      statusName: [
        'Pendente de confirmação',
        'Pedido confirmado',
        'Não reconhece o pedido',
        'Mercadoria não recebida',
        'Recebida com avaria',
        'Devolvida',
        'Recebida com devolução parcial',
        'Recebida e confirmada',
        'Pagamento Autorizado',
      ]
    }
  },
  computed: {
    orders() {
      return this.$store.state.orders.dataOrders;
    },
  },
  methods: {
    addZero(numero){
      if (numero <= 9) 
          return "0" + numero;
      else
          return numero; 
    },
    formatData(date) {
      const dateActual = new Date(date);
      const dateActualFormated = (this.addZero(dateActual.getDate().toString()) + "/" + (this.addZero(dateActual.getMonth()+1).toString()) + "/" + dateActual.getFullYear());
      return dateActualFormated;
    },
    formatValue(value) {
      const valueNumber = parseFloat(value);
      const valueFormated = valueNumber.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
      return valueFormated;
    },
    formatStatus(i) {
      return this.statusName[i];
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
  /* border-bottom: 1px solid #DFE2EB; */
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
  font-size: 11px;
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

.col-head p{
  font-size: 7px;
  font-style: normal;
  font-weight: 500;
  color: #A1A8B8;
  padding-left: 10px;
  padding-bottom: 10px;
}

.col-body p{
  font-size: 7px;
  font-style: normal;
  font-weight: 500;
  color: #4D5566;
  padding-left: 10px;
}

.row-body {
  border: #DFE2EB solid 1px;
  border-radius: 4px;
  margin-bottom: 6px;
}

.row-head, .row-body {
  margin-left: 20px;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
}

button {
  border:1px solid #CAD3FF;
  border-radius:24px;
  background: #FFFFFF;
  color: #727D94;
  display:inline-block;
  cursor:pointer;
  font-size: 6px;
  font-weight: 700;
  padding:4px 12px;
  text-decoration:none;
}

.col-button {
  padding-bottom: 4px;
  align-items: center;
  justify-content: center;
}

.font-green p{
  color: #00AD8C;
}
</style>