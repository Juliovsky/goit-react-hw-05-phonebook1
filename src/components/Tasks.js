import React, {Component} from 'react'
import List from './List/List'
import Phonebook from "./Phonebook";

class Tasks extends Component {
    state = {
        contacts: [ ],
        filter: '',
    }


    componentDidMount() {

        this.setState({
            contacts: JSON.parse(localStorage.getItem('contacts')) || []
        });
    }


    filterList = () => {
        if (this.state.filter)
            return this.state.contacts.filter(item =>
                item.contact.toLowerCase().includes(this.state.filter)
            );

        return(this.state.contacts)

    }

    getFilterValue = (e) => {
        this.setState({filter: e.target.value})
    }

    getContactInfo = (newContact) => {
        this.setState(prevstate => ({
            contacts: [...prevstate.contacts, newContact]
        }))
    }
    deleteItem = (e) => {
        const id = e.target.id;
        this.setState(prevstate => ({
            contacts: [...prevstate.contacts.filter(contact => contact.id !== id)]
        }))

        this.deleteFromLocalStorage(e)
    }

    deleteFromLocalStorage(e){
        const id = e.target.id;
        const LocalStorageArray = ( JSON.parse(localStorage.getItem('contacts')));
        let FilterArray = LocalStorageArray.filter (item => item.id !== id);
        contacts: localStorage.setItem('contacts', JSON.stringify(FilterArray))

    }

    render() {
        return (
            <>
                <Phonebook getContactInfo={this.getContactInfo}
                    contacts={this.state.contacts}
                />
                <List
                    contacts={this.state.contacts}
                    filterList={this.filterList()}
                    filter={this.state.filter}
                    getFilterValue={this.getFilterValue}
                    deleteItem ={this.deleteItem}
                />
            </>
        );
    }
}

export default Tasks;

