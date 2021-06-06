import React from 'react'
import style from './ErrorPage.module.css'
import {NavLink} from "react-router-dom";

const ErrorPage = props => {
    return (
        <div className={style.errorPage}>

            <h1>Page not found 404</h1>

            <div className={style.action}>
                <NavLink to='/'>
                    <button className='button button-secondary'>Back</button>
                </NavLink>
            </div>
        </div>
    )
}

export default ErrorPage