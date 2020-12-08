import React from 'react'
import style from './Contacts.module.css'
import commonStyle from '../common/styles/Common.module.css'
import ContactsForm from "./contactsForm/ContactsForm";


function Contacts() {

    return (
        <div className={style.contactsBlock}>
            <div className={`${commonStyle.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div>
                    <ContactsForm/>
                </div>
                <button className={style.button}>Send</button>
            </div>
        </div>
    )


}


export default Contacts;