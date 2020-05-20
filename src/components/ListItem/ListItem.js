import React from 'react'

import styles from './ListItem.module.css'


const ListItem = ( {contact: {contact, number, id},deleteItem}) => {
    return (
        <li>
            <p className={styles.sign}>{contact} : {number}</p>
            <button className={styles.btn} id={id}
                    onClick={deleteItem}
            >delete</button>
        </li>
    )
}

export default ListItem;