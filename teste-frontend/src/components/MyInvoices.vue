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
        <tbody>
          <tr v-for="(order, i) in orders" :key="i">
          <td>{{ order['nNf'] }}</td>
          <td>{{ order['buyers'].name }}</td>
          <td>{{ order['providers'].name }}</td>
          <td>{{ formatData(order['emissionDate']) }}</td>
          <td>{{ formatValue(order['value']) }}</td>
          <td>{{ formatStatus(order['orderStatusBuyer']) }}</td>
          </tr>
        </tbody>
      </table>
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