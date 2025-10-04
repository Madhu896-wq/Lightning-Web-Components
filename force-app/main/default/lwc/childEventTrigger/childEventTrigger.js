import { LightningElement } from 'lwc';

export default class ChildEventTrigger extends LightningElement {
    books = [
        { id: 1, title: '1984', author: 'George Orwell' },
        { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' },
        { id: 3, title: 'Sapiens', author: 'Yuval Noah Harari' }
    ];


    handleSendBooks() {
        const event = new CustomEvent('booklist', {
            detail: this.books
        });

        this.dispatchEvent(event);
    }
}
