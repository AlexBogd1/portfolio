import React from 'react'
import style from './Footer.module.css'
import commonStyle from '../common/styles/Common.module.css'
import LinksBlock from "./LinksBlock/LinksBlock";


function Footer() {

    return (
        <div className={style.footerBlock}>
            <div className={`${commonStyle.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Alex Bogdanovich</h2>
                <LinksBlock/>
                <p>2019 Все права защищены</p>
            </div>
        </div>
    )


}


export default Footer;