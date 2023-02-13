import React, { useEffect, useState } from "react";
import { Contact } from "../models/contact.class";
import ContactForm from "./forms/contactForm";
import ContactComponent from './contact'


export default function ContactListComponent(){
    const default1 = new Contact('contacto 1', 'apellidos 1', '666666666', 'contacto1@contactos.com', false);
    const default2 = new Contact('contacto 2', 'apellidos 2', '677777777', 'contacto2@contactos.com', false);
    const default3 = new Contact('contacto 3', 'apellidos 3', '688888888', 'contacto3@contactos.com', false);

    const [contacts, setContacts] = useState([default1, default2, default3]);


    useEffect(() => console.log('Lista de contactos, actualizada'), [contacts]);

    function create(Contact){
        const tempContacts = [...contacts];
        tempContacts.push(Contact);
        setContacts(tempContacts);
    }

    function remove(Contact){
        const tempContacts = [...contacts];
        const index = contacts.indexOf(Contact);
        delete(tempContacts[index]);
        setContacts(tempContacts);
    }

    function changeState(Contact){
        const tempContacts = [...contacts];
        const index = contacts.indexOf(Contact);
        tempContacts[index].state = !tempContacts[index].state;
        setContacts(tempContacts);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Name:</th>
                        <th scope='col'>Surname:</th>
                        <th scope='col'>Email:</th>
                        <th scope='col'>Tel:</th>
                    </tr>
                </thead>
                <tbody>
                    { contacts.map((contact, index) => {
                        return (
                                <ContactComponent 
                                    key={index} 
                                    contact={contact}
                                    state={changeState}
                                    remove = {remove}
                                >
                                </ContactComponent>
                            )
                        }
                    )}
                </tbody>
            </table>
        )
    }

    let contactsTable;

    if(contacts.length > 0){
        contactsTable = <Table></Table>
    }else{
        contactsTable = (
        <div>
            <h3> There are no contacts to show</h3>
            <h4>Please, create one</h4>
        </div>
        )
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card' >
                    {/* Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Contacts:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        {contactsTable}
                    </div>
                </div>
            </div>
            <ContactForm add={create} length={contacts.length}></ContactForm>
        </div>
    );
}