import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'; 
import TYPE_FORM from "@salesforce/schema/Opportunity.Type";
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName';
import TOTAL_AMOUNT from '@salesforce/schema/Opportunity.Amount';

// here you will store all the data and you will use data whenever you wanted to 
// Ex: you will get all the vegetables and store in Fridge from fridge you will use whenever you wanted to use it 
// getRecord & getField values are adapters, so that we can access the data as quick as

export default class RecordForm extends LightningElement {
    @api recordId; //variable recordId should declared like this you cannot name in other way
    fields = [TYPE_FORM, STAGE_NAME, TOTAL_AMOUNT]; //these are the fields of Opportunity

    @wire(getRecord, { recordId: '$recordId', fields: '$fields' }) caseVar;

    get Type() {
        return getFieldValue(this.caseVar.data, TYPE_FORM);
    }

    get Amount() {
        return getFieldValue(this.caseVar.data, TOTAL_AMOUNT);
    }

    get StageName() {
        return getFieldValue(this.caseVar.data, STAGE_NAME);
    }
}
