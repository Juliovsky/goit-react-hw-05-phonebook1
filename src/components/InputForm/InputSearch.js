import React from "react";
import styles from './inputForm.module.css'
import {CSSTransition} from "react-transition-group";
import fadeTransition from "./transitions/fade.module.css";


function InputSearch({getFilterValue, filter}) {

    return (
        <>
                <h3 className={styles.title}>Find contacts by name</h3>
                <input
                    name='filter'
                    placeholder="search"
                    type="text"
                    onChange={getFilterValue}
                    value={filter}
                />
        </>
    )

}

export default InputSearch