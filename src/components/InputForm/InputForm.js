import React from "react";
import css from './inputForm.module.css'
import {CSSTransition} from "react-transition-group";
import fadeTransition from './transitions/fade.module.css'



export function InputForm({handleChange, contact, number,desForm}) {
    return (
        <div>
            <CSSTransition in={desForm} timeout={2000} classNames={fadeTransition} unmountOnExit>
                <h2 className={css.appear}>Phonebook</h2>
            </CSSTransition>
            <h3 className={css.title}>Name</h3>
            <input

                name='contact'
                placeholder="Please put the name"
                onChange={handleChange}
                value={contact}
                type="text"
            />
            <h3 className={css.subtitle}>Number</h3>
            <input
                name='number'
                placeholder="Please put the number"
                onChange={handleChange}
                value={number}
                type="number"
            />
        </div>
    )
}



