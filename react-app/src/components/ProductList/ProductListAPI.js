import React from 'react'
import ProductList from "./ProductList";
import axios from "axios";

class ProductListAPI extends React.Component {

    constructor(props) {
        super(props);

        this.onDeleteProduct = this.onDeleteProduct.bind(this)
        this.onDeleteAllProducts = this.onDeleteAllProducts.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/products')
            .then(response => {
                this.props.getProducts(response.data)
            })
    }

    onDeleteProduct(id) {
        axios.delete(`http://localhost:8080/api/products/${id}`)
            .catch(error => {
                console.log(error);
            })

        this.props.deleteProduct(id)
    }

    onDeleteAllProducts() {
        axios.delete('http://localhost:8080/api/products')
            .catch(error => {
                console.log(error);
            })

        this.props.deleteAllProducts()
    }

    render() {
        return <ProductList onDeleteProduct={this.onDeleteProduct}
                            onDeleteAllProducts={this.onDeleteAllProducts}
                            products={this.props.products}
                            setEditedProductId={this.props.setEditedProductId}
        />
    }
}

export default ProductListAPI