export class Contact{
    name = '';
    surname = '';
    tel = '';
    email = '';
    state = false;

    constructor(name, surname, tel, email, state){
        this.name = name;
        this.surname = surname;
        this.tel = tel;
        this.email = email;
        this.state = state;
    }
}