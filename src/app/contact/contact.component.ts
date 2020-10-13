import { Component, OnInit } from "@angular/core"

@Component({
    selector:'app-contact',
    templateUrl: './contact.component.html',
    styleUrls : ['./contact.component.css']
})

export class ContactComponent implements OnInit{
    name: string;
    email: string;
    phone: string;
    isFavorite: boolean = false;

    ngOnInit() {
        this.name = 'John Doe';
        this.email = 'john.doe@gmail.com';
        this.phone = '011642839';
    }

    onClick(): void {
        console.log('Button clicked. Status van favorite is:' + this.isFavorite);
    }
}