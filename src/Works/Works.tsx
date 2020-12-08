import React from 'react'
import commonStyle from '../common/styles/Common.module.css'
import style from './Works.module.css'
import WorkBlock from "./Work/WorkBlock";



function Works() {

    return (
        <div className={style.worksBlock}>
            <div className={`${commonStyle.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={`${style.works}`}>
                    <WorkBlock title={'Cоциальная сеть'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ullam?'}/>
                    <WorkBlock title={'TodoList'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ullam?'}/>
                    <WorkBlock title={'YandexMap'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, ullam?'}/>
                </div>
            </div>
        </div>
    )

}


export default Works;