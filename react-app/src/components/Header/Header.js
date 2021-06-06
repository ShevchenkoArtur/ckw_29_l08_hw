import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = props => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <p>CKW29 L08 HW</p>
            </div>
            <div className={style.menu}>
                <ul className={style.list}>
                    <li className={style.item}>
                        <NavLink to="/product-list">
                            Product List
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header