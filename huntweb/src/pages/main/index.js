import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";
// statefull component
export default class Main extends Component {
  // react variable
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }
  // user functions need to be arrowed
  loadProducts = async () => {
    const response = await api.get("/products");
    // react method
    this.setState({ products: response.data.docs });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="product-list">
        {products.map((product) => (
          // when using map: key is required
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a href="">Website</a>
          </article>
        ))}
      </div>
    );
  }
}
