import React from 'react'
import axios from "axios";
import AddProduct from "./AddProduct";

class AddProductAPI extends React.Component {

    constructor(props) {
        super(props);

        this.addProduct = this.addProduct.bind(this)
    }

    addProduct() {
        let data = {
            vendor: this.props.inputControl.vendor.value,
            typeProduct: this.props.inputControl.typeProduct.value,
            model: this.props.inputControl.model.value,
            price: this.props.inputControl.price.value
        }

        if (data.vendor &&
            data.typeProduct &&
            data.model &&
            data.price
        ) {
            axios.post('http://localhost:8080/api/products', data)
                .catch(error => {
                    console.log(error);
                })

            this.props.resetInputValue()
        }
    }

    render() {
        return <AddProduct inputControl={this.props.inputControl}
                           updateInputValue={this.props.updateInputValue}
                           addProduct={this.addProduct}
        />
    }
}

export default AddProductAPI