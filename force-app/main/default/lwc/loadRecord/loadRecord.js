import { LightningElement,api } from 'lwc';

export default class LoadRecord extends LightningElement {
    @api recordId;
    objApiName = 'Account';
    fields = ['Type', 'Industry', 'Amount'];
}
