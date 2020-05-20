import React, {Component} from "react";
import {InputForm} from './InputForm/InputForm';
import {BtnFormSubmit} from './Button/BtnFormSubmit';
import {uuid} from 'uuidv4';
import styles from './InputForm/inputForm.module.css'
// import List from "./List/List";
import {Alert} from "./Alert/Alert";
import alertTransition from './Alert/transitions/alert.module.css'
import {CSSTransition} from "react-transition-group";
import css from "./InputForm/inputForm.module.css";


// import css from "./InputForm/inputForm.module.css";


class Phonebook extends Component {
    state = {
        contact: '',
        number: '',
        isOpen: false,
        isAlert: false,


    };

    componentDidMount() {

        this.setState({
            isOpen: true,
            isAlert: false
        });

    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    checkContactExist = (contactName) => {
        this.setState(prevstate=>({isAlert:!prevstate.isAlert}))
    }

    getExist=()=>{
        const allContacts = this.props.contacts;
        const include = allContacts.filter(item =>
            item.contact.toLowerCase()
                .includes(this.state.contact.toLowerCase())
        );
        return (include.length !== 0);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const contact = this.state.contact;
        const number = this.state.number;
        if (contact && number && !this.getExist()) {
                const newContact = {id: uuid(), contact, number}
                this.props.getContactInfo(newContact);
                this.setState({contact: '', number: ''});
                this.saveToLocalStorage(newContact);
        }else{
            this.checkContactExist()
        }
    }


    saveToLocalStorage(contact) {
        if (!localStorage.getItem('contacts')) {
            localStorage.setItem('contacts', JSON.stringify([]));
        }

        let localStorageArray = JSON.parse((localStorage.getItem('contacts')));
        console.log(localStorageArray)

        localStorageArray.push(contact);
        contacts: localStorage.setItem('contacts', JSON.stringify(localStorageArray))
    }


    render() {

        return (
            <>
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <InputForm
                    desForm={this.state.isOpen}
                    contact={this.state.contact}
                    number={this.state.number}
                    handleChange={this.handleChange}
                />
                <BtnFormSubmit/>
            </form>
                <CSSTransition in={this.state.isAlert} timeout={2000} classNames={alertTransition} unmountOnExit>
                    <Alert contact={this.state.contact} />
                </CSSTransition>
             </>

        );
    }

}

export default Phonebook;

