import React, {useRef} from 'react';
import { Contact } from '../../models/contact.class';

const ContactForm = ({add, length}) => {

    const nameRef = useRef('');
    const surnameRef = useRef('');
    const telRef = useRef('');
    const emailRef = useRef('');
    const stateRef = useRef(false);

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            telRef.current.value,
            emailRef.current.value,
            stateRef.current.value,
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Name'/>
                <input ref={surnameRef} id='inputState' type='text' className='form-control form-control-lg' required placeholder='Surname'/>
                <input ref={telRef} id='inputState' type='text' className='form-control form-control-lg' required placeholder='Tel number'/>
                <input ref={emailRef} id='inputState' type='text' className='form-control form-control-lg' required placeholder='Email'/>
                <select className='form-control form-control-lg' ref={stateRef} defaultValue={false} id='selectState'>
                    <option value={true}>
                        Connected
                    </option>
                    <option value={false}>
                        Disconnected
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add New Contact' : 'Create your First Contact'}
                </button>
            </div>
        </form>
    );
}

export default ContactForm;