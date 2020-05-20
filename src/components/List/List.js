import React, {Component} from 'react';
import ListItem from "../ListItem/ListItem";
import InputSearch from "../InputForm/InputSearch";
import styles from './list.module.css';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import popTransition from "./transitions/pop.module.css";
import searchTransition from "./transitions/search.module.css"

class List extends Component {
    state = {
        inSearch: false
    }

    componentDidMount(){
        this.setState({inSearch:true})
    }


    render() {
        return (
            <>
                    <>
                        <h3 className={styles.title}>Contacts</h3>
                        <CSSTransition in={this.props.contacts.length >= 2} timeout={250} classNames={searchTransition} unmountOnExit>
                            <InputSearch
                                filter={this.props.filter}
                                getFilterValue={this.props.getFilterValue}
                            />
                        </CSSTransition>
                    </>



                <TransitionGroup component='ul'>
                    {this.props.filterList.map(contact =>
                        <CSSTransition timeout={200}
                                       classNames={popTransition}
                                       unmountOnExit>
                            <ListItem key={contact.id}
                                      deleteItem={this.props.deleteItem}
                                      contact={contact}/>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </>

        )
    }


}

export default List;


// const List = ({contacts, filterList, filter, getFilterValue, deleteItem}) => {
//     return (
//         <>
//             {contacts.length >= 2 ?
//                 <>
//                     <h3 className={styles.title}>Contacts</h3>
//                     <CSSTransition in={contacts.length >= 2} timeout={250} classNames={searchTransition} unmountOnExit>
//                         <InputSearch
//                             filter={filter}
//                             getFilterValue={getFilterValue}
//                         />
//                     </CSSTransition>
//                 </>
//                 : <></>}
//             <TransitionGroup component='ul'>
//                 {filterList.map(contact =>
//                     <CSSTransition timeout={200}
//                                    classNames={popTransition}
//                                    unmountOnExit>
//                         <ListItem key={contact.id}
//                                   deleteItem={deleteItem}
//                                   contact={contact}/>
//                     </CSSTransition>
//                 )}
//             </TransitionGroup>
//         </>
//     );
//
// }
// export default List;