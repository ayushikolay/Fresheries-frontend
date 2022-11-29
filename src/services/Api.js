import axios from "axios";
const url = "https://fresheries-api.onrender.com/api/product";

export default class API {
  static async getAllProduct() {
    const res = await axios.get(url);
    return res.data;
  }

  static async getProductByID(id) {
    const res = await axios.get(`${url}/id/${id}`);
    return res.data;
  }

  static async getAllProductsByTitle(title) {
    const res = await axios.get(`${url}/${title}`);
    return res.data;
  }

  static async addProduct(product) {
    const res = await axios.post(url, product);
    return res.data;
  }

  static async updateProduct(id, product) {
    const res = await axios.patch(`${url}/${id}`, product);
    return res.data;
  }

  static async deleteProduct(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
  // return axios.create({
  //   baseURL: "http://localhost:8081/",
  // });
}
