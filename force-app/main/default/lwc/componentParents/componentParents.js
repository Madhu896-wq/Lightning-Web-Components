import { LightningElement } from 'lwc';

export default class ComponentParents extends LightningElement {
    childMessage = '';
    handlemessage(event){
        this.childMessage = event.detail;
    }
}