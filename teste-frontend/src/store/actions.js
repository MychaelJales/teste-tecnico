import fetchOrders from "@/helpers/fetchOrders"

export default {
  async getOrders({commit}) {
    const data = await fetchOrders(1);

    commit('getOrders', data);
  }
}