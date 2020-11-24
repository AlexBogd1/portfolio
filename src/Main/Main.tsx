import React from 'react'
import style from './Main.module.css'


function Main() {

    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>
                        I am Alex Bogdanovich
                    </h1>
                    <p>Frontend developer</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    )

}


export default Main;