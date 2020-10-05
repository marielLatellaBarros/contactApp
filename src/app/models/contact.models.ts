export class Contact {
    name: string;
    email: string;
    phone: string;
    isFavourite: boolean;
    avatar: string;


    constructor (
        name: string,
        email: string,
        phone: string,
        isFavourite: false,
        avatar: 'assets/avatar.png',) {
    }
}