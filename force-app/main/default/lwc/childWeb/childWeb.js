import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    sendDataToParent() {
        // ✅ Sending multiple values in an object
        const person = {
            name: 'Krishna Das',
            age: 25,
            city: 'Hyderabad'
        };

        const event = new CustomEvent('personinfo', {
            detail: person
        });

        this.dispatchEvent(event);
    }
}
