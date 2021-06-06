import React from 'react'
import EditProduct from "./EditProduct";
import axios from "axios";

class EditProductAPI extends React.Component {

    constructor(props) {
        super(props);

        this.editProduct = this.editProduct.bind(this)
    }

    editProduct() {
        let productId = this.props.editedProductId
        let [editedProduct] = this.props.products.filter(product => product.id === productId)

        let data = {
            vendor: this.props.inputControl.vendor.value,
            typeProduct: this.props.inputControl.typeProduct.value,
            model: this.props.inputControl.model.value,
            price: this.props.inputControl.price.value
        }

        if (!data.vendor) {
            data.vendor = editedProduct.vendor
        }

        if (!data.typeProduct) {
            data.typeProduct = editedProduct.typeProduct
        }

        if (!data.model) {
            data.model = editedProduct.model
        }

        if (!data.price) {
            data.price = editedProduct.price
        }

        axios.put(`http://localhost:8080/api/products/${productId}`, data)
            .catch(error => {
                console.log(error);
            })

        this.props.resetInputValue()
    }

    render() {
        return <EditProduct editProduct={this.editProduct}
                            products={this.props.products}
                            updateInputValue={this.props.updateInputValue}
                            inputControl={this.props.inputControl}
                            editedProductId={this.props.editedProductId}
        />
    }
}

export default EditProductAPI