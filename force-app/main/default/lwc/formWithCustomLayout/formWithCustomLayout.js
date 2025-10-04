import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class FormWithCustomLayout extends LightningElement {
    @api recordId;
    objectApiName = 'Contact';

    handleSuccess() {
        this.dispatchEvent(new ShowToastEvent({
            title: 'Success',
            message: 'Record updated successfully',
            variant: 'success'
        }));
    }

    handleError(event) {
        this.dispatchEvent(new ShowToastEvent({
            title: 'Error updating record',
            message: event.detail.message,
            variant: 'error'
        }));
    }
}
