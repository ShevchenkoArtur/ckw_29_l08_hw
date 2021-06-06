import React from 'react'
import '../../globalCss/button.css'
import {NavLink} from "react-router-dom";
import style from './ProductList.module.css'
import deleteIcon from '../../assets/images/icons/deleteIcon.svg'
import editIcon from '../../assets/images/icons/editIcon.svg'

const ProductList = props => {

    const setEditedProductId = id => {
        props.setEditedProductId(id)
    }

    return (
        <div>
            <div className={style.action}>
                <NavLink to='/add-product'>
                    <button className='button button-success '>Create Product</button>
                </NavLink>
            </div>
            <table >
                <thead>
                <tr>
                    <td>id</td>
                    <td>Vendor</td>
                    <td>Type Product</td>
                    <td>Model</td>
                    <td>Price</td>
                    <td></td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                    {props.products.map(product => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.vendor}</td>
                                <td>{product.typeProduct}</td>
                                <td>{product.model}</td>
                                <td>{product.price}</td>
                                <td>
                                    <NavLink to='/edit-product'>
                                        <img onClick={() => setEditedProductId(product.id)}
                                             src={editIcon}
                                             alt="Edit"
                                        />
                                    </NavLink>
                                </td>
                                <td>
                                    <img onClick={() => props.onDeleteProduct(product.id)}
                                         src={deleteIcon}
                                         alt="Delete"
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList