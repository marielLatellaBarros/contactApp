import { Component } from "@angular/core"

@Component({
    selector:'app-contact',
    templateUrl: './contact.component.html',
    styleUrls : ['./contact.component.css']
})

export class ContactComponent{
    name: string = 'John Doe';
    email: string = 'john.doe@gmail.com';
    phone: string = '011642839'
}