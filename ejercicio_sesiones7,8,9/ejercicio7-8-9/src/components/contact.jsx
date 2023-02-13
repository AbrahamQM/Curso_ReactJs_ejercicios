import React, { useEffect } from 'react';

const ContactComponent = ({contact, state, remove}) =>{

    useEffect(() => {
        console.log('Created Contact', contact)
    }, [contact]);


    function contactStateBadge(){
        if (contact.state){
            return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        'Connected'
                    </span>
                </h6>
            )                
        }else{
            return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        'Disconnected'
                    </span>
                </h6>
            )
        }
    }

    /**
     * Function that returns icon depending on connected state
     */
    function contactCompletedIcon(){
        if(contact.state){
            return (<i onClick={() => state(contact)} className='bi-toggle-on contact-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => state(contact)} className='bi-toggle-off contact-action' style={{color: 'grey'}}></i>)
        }
    }
    

    const contactConnected = {
        color: 'green',
        fontWeight: 'bold',
    }

    const contactDisconnected = {
        fontWeight: 'bold',
        color: 'tomato'
    }

    return (
        <tr className='fw-normal' style={contact.state ? contactConnected : contactDisconnected}>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.surname}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.tel}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>

            <td className='align-middle'>
                {/* Execution of function to return badge element */}
                {contactStateBadge()}
            </td>
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                {contactCompletedIcon()}
                <i className='bi-trash contact-action' style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
            </td>
        </tr>
    );
}

export default ContactComponent;