import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CASE_OBJ from '@salesforce/schema/Case';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';

export default class CustomCaseCreator extends LightningElement {
    get options() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
        ];
    }
    subject = '';
    description = '';
    priority = '';

    handleSubjectChange(event) {
        this.subject = event.target.value;
    }

    handleDescriptionChange(event) {
        this.description = event.target.value;
    }

    handlePriorityChange(event) {
        this.priority = event.target.value;
    }

   async createCase() {
    const fields = {};
    fields[SUBJECT_FIELD.fieldApiName] = this.subject;
    fields[DESCRIPTION_FIELD.fieldApiName] = this.description;
    fields[PRIORITY_FIELD.fieldApiName] = this.priority;

    const recordInput = { apiName: CASE_OBJ.objectApiName, fields };

    try {
        const record = await createRecord(recordInput);
        alert('Case created with Id: ' + record.id);
    } catch (error) {
        alert('Error creating case: ' + (error.body?.message || error.message));
    }
}
}