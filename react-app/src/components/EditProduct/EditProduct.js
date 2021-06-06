import React from 'react'
import style from './EditProduct.module.css'
import {NavLink} from "react-router-dom";

const EditProduct = props => {

    const editedProduct = props.products.filter(product => product.id === props.editedProductId)[0]
    const {vendor, typeProduct, model, price} = editedProduct

    const onSubmit = (event) => {
        event.preventDefault()
    }

    const onUpdateInputValue = (event) => {
        props.updateInputValue(event.target.value, event.target.name)
    }

    return (
            <form onSubmit={onSubmit}>
                <label>Vendor
                    <input type={props.inputControl.vendor.type}
                           value={props.inputControl.vendor.value}
                           name={props.inputControl.vendor.name}
                           placeholder={vendor}
                           onChange={onUpdateInputValue}
                    />
                </label>
                <label>Type Product
                    <input type={props.inputControl.typeProduct.type}
                           value={props.inputControl.typeProduct.value}
                           name={props.inputControl.typeProduct.name}
                           placeholder={typeProduct}
                           onChange={onUpdateInputValue}
                    />
                </label>
                <label>Model
                    <input type={props.inputControl.model.type}
                           value={props.inputControl.model.value}
                           name={props.inputControl.model.name}
                           placeholder={model}
                           onChange={onUpdateInputValue}
                    />
                </label>
                <label>Price
                    <input type={props.inputControl.price.type}
                           value={props.inputControl.price.value}
                           name={props.inputControl.price.name}
                           placeholder={price}
                           onChange={onUpdateInputValue}
                    />
                </label>
                <div className={style.action}>
                    <NavLink to="/">
                        <button className='button button-secondary' type='button'>
                            Back
                        </button>
                    </NavLink>
                    <button className='button button-success' onClick={props.editProduct} type='submit'>
                        Edit Product
                    </button>
                </div>
            </form>
    )
}

export default EditProduct