import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

// Account fields
import NAME_FIELD from '@salesforce/schema/Account.Name';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

// Opportunity fields
import OPP_NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import OPP_AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import OPP_STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class AccountOpportunityViewer extends LightningElement {
    @api recordId;
    @api objectApiName;

    // Wires
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [
            NAME_FIELD, RATING_FIELD, PHONE_FIELD,
            OPP_NAME_FIELD, OPP_AMOUNT_FIELD, OPP_STAGE_FIELD
        ]
    }) records;

    // Account Getters
    get isAccount() {
        return this.objectApiName === 'Account';
    }

    get name() {
        return getFieldValue(this.records.data, NAME_FIELD);
    }

    get rating() {
        return getFieldValue(this.records.data, RATING_FIELD);
    }

    get phone() {
        return getFieldValue(this.records.data, PHONE_FIELD);
    }

    // Opportunity Getters
    get isOpportunity() {
        return this.objectApiName === 'Opportunity';
    }

    get opportunityName() {
        return getFieldValue(this.records.data, OPP_NAME_FIELD);
    }

    get opportunityAmount() {
        return getFieldValue(this.records.data, OPP_AMOUNT_FIELD);
    }

    get opportunityStage() {
        return getFieldValue(this.records.data, OPP_STAGE_FIELD);
    }
}
