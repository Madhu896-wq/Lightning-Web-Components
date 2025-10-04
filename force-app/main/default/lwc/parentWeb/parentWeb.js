import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    name;
    age;
    city;

    handlePersonInfo(event) {
        const person = event.detail; // ✅ Extract the object

        this.name = person.name;
        this.age = person.age;
        this.city = person.city;
    }
}
