import React from 'react'
import style from './AddProduct.module.css'
import '../../globalCss/button.css'
import '../../globalCss/form.css'
import {NavLink} from "react-router-dom";

const AddProduct = props => {

    const onSubmit = (event) => {
        event.preventDefault()

        props.addProduct()
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
                <div className={style.action}>
                    <NavLink to="/">
                        <button className='button button-secondary' type='button'>
                            Back
                        </button>
                    </NavLink>
                    <button className='button button-success' type='submit'>
                        Add Product
                    </button>
                </div>
            </form>
    )
}

export default AddProduct