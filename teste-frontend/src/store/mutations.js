import fetchOrders from "@/helpers/fetchOrders"

export default {
  getOrders(state) {
    fetchOrders(1).then((res) => {
      console.log(res);
      state.orders.dataOrders = res;
    });
  }
}