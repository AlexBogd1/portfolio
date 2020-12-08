import React from 'react'
import style from './ContactsForm.module.css'


function ContactsForm() {

    return (
        <div className={style.worksBlock}>
            <form className={style.form}>
                <input className={style.inputField} type={'text'}/>
                <input className={style.inputField} type={'text'}/>
                <textarea rows ={4} className={style.inputField}></textarea>
            </form>
        </div>
    )
}


export default ContactsForm;