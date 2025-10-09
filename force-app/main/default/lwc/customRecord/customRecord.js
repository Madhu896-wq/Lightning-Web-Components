import { LightningElement, track, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class CustomRecord extends LightningElement {
    // Form fields
    @track opportunityName = '';
    @track amount = null;
    @track closeDate = '';
    @track stage = '';
    @track stageOptions = [];

    recordTypeId;

    // Wire to get object info and extract recordTypeId
    @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT })
    objectInfo({ data, error }) {
        if (data) {
            this.recordTypeId = data.defaultRecordTypeId;
        } else if (error) {
            console.error('Error fetching object info:', error);
        }
    }

    // Wire to get picklist values for Stage
    @wire(getPicklistValues, {
        recordTypeId: '$recordTypeId',
        fieldApiName: STAGE_FIELD
    })
    picklistValues({ data, error }) {
        if (data) {
            this.stageOptions = data.values.map(item => ({
                label: item.label,
                value: item.value
            }));
        } else if (error) {
            console.error('Error fetching stage picklist values:', error);
        }
    }

    // Handlers for form inputs
    handleNameChange(event) {
        this.opportunityName = event.target.value;
    }

    handleAmountChange(event) {
        const value = event.target.value;
        this.amount = value ? parseFloat(value) : null;
    }

    handleCloseDateChange(event) {
        this.closeDate = event.target.value;
    }

    handleStageChange(event) {
        this.stage = event.target.value;
    }

    async createOpportunity() {
        // Basic validation
        if (!this.opportunityName || !this.closeDate || !this.stage) {
            alert('Please fill in all required fields: Name, Close Date, and Stage.');
            return;
        }

        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.opportunityName;
        fields[AMOUNT_FIELD.fieldApiName] = this.amount;
        fields[CLOSE_DATE_FIELD.fieldApiName] = this.closeDate;
        fields[STAGE_FIELD.fieldApiName] = this.stage;

        const recordInput = {
            apiName: OPPORTUNITY_OBJECT.objectApiName,
            fields
        };

        try {
            const record = await createRecord(recordInput);
            alert('Opportunity created with Id: ' + record.id);

            // Reset form (optional)
            this.opportunityName = '';
            this.amount = null;
            this.closeDate = '';
            this.stage = '';
        } catch (error) {
            console.error('Error creating opportunity:', error);
            alert('Error creating opportunity: ' + (error.body?.message || error.message));
        }
    }
}
