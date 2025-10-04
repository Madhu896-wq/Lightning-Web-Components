import { LightningElement } from 'lwc';

export default class ComponentChild extends LightningElement {
    
    sendDataToParent(){
        const message= 'Hello World';
        const event = new CustomEvent('message',{
            detail:message
        });
        this.dispatchEvent(event);
    }
}