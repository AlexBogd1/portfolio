import React from 'react'
import style from './WorkBlock.module.css'


type WorkBlockType = {
    title?: string
    description?: string
}


function WorkBlock(props: WorkBlockType) {

    return (
        <div className={style.work}>
            <div className={style.icon}>
                <button className={style.button}>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <div className={style.description}>{props.description}</div>

        </div>
    )

}


export default WorkBlock;