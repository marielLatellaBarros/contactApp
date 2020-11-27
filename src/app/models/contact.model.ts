export class Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
    isFavorite: boolean;
    avatar: string;

    constructor (name: string, email: string, phone: string, isFavorite: boolean, avatar: 'assets/avatar.png',id?: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.isFavorite = isFavorite;
        this.avatar = avatar;
    }
}