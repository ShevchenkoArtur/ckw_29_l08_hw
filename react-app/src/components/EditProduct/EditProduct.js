import React from 'react'
import {NavLink} from "react-router-dom";

const EditProduct = props => {

    const onSubmit = (event) => {
        event.preventDefault()
    }

    const onUpdateInputValue = (event) => {
        props.updateInputValue(event.target.value, event.target.name)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Vendor
                    <input type={props.inputControl.vendor.type}
                           value={props.inputControl.vendor.value}
                           name={props.inputControl.vendor.name}
                           onChange={onUpdateInputValue}
                    />
                </label>
                <label>Type Product
                    <input type={props.inputControl.typeProduct.type}
                           value={props.inputControl.typeProduct.value}
                           name={props.inputControl.typeProduct.name}
                           onChange={onUpdateInputValue}
                    />
                </label>
                <label>Model
                    <input type={props.inputControl.model.type}
                           value={props.inputControl.model.value}
                           name={props.inputControl.model.name}
                           onChange={onUpdateInputValue}
                    />
                </label>
                <label>Price
                    <input type={props.inputControl.price.type}
                           value={props.inputControl.price.value}
                           name={props.inputControl.price.name}
                           onChange={onUpdateInputValue}
                    />
                </label>
                <div>
                    <NavLink to="/">
                        <button type='button'>
                            Back
                        </button>
                    </NavLink>
                    <button onClick={props.editProduct} type='submit'>
                        Edit Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct