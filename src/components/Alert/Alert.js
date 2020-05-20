import React from "react";
import styles from './alert.module.css'

export const Alert =({contact})=>{
    return <p className={styles.alert}>Name {contact} already exist. Turn on your imagination</p>;
}