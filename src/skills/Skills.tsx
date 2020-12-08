import React from 'react'
import style from './Skills.module.css'
import commonStyle from '../common/styles/Common.module.css'
import Skill from "./skill/Skill";



function Skills() {

    return (
        <div className={style.skillsBlock}>
                <div className={`${commonStyle.container} ${style.skillsContainer}`}>
                    <h2 className={style.title}>My Skills</h2>
                    <div className={`${style.skills}`}>
                        <Skill title = {'Java Script'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur excepturi minus, nostrum nulla provident vitae.'}/>
                        <Skill title = {'HTML and CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur excepturi minus, nostrum nulla provident vitae.'}/>
                        <Skill title = {'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur excepturi minus, nostrum nulla provident vitae.'}/>
                    </div>
                </div>
        </div>
    )

}


export default Skills;