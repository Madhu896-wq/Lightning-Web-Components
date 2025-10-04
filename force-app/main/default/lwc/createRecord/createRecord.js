import Phone from '@salesforce/schema/Account.Phone';
import { LightningElement } from 'lwc';

export default class CreateRecord extends LightningElement {
    fields = ['Name', 'Amount', 'StageName', 'CloseDate'];

}
