import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";
// statefull component
export default class Main extends Component {
  // react variable
  state = {
    products: [],
    productInfo: {},
    page: 1,
  };

  componentDidMount() {
    this.loadProducts();
  }
  // user functions need to be arrowed
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    // react method
    this.setState({ products: docs, productInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;
    if (page === 1) return;

    const pageNumber = page - 1;
    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;
    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  render() {
    const { products, productInfo, page } = this.state;

    return (
      <div className="product-list">
        {products.map((product) => (
          // when using map: key is required
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a href="">About</a>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Previous
          </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
