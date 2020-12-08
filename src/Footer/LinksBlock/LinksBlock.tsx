import React from 'react'
import style from './LinksBlock.module.css'


function LinksBlock() {

    return (
        <div className={style.linksBlock}>
            <a className = {style.link} href="">Facebook</a>
            <a className = {style.link} href="">Twitter</a>
            <a className = {style.link} href="">Linkedin</a>
            <a className = {style.link} href="">Pinterest</a>
        </div>
    )


}


export default LinksBlock;