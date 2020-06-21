import React, { Component } from "react";
import api from "../../services/api";

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
    return (
      <div className="product-list">
        {this.state.products.map((product) => (
          // when using map: key is required
          <h2 key={product._id}>{product.title}</h2>
        ))}
      </div>
    );
  }
}
