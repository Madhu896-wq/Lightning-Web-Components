import { LightningElement } from 'lwc';

export default class CustomCaseCreator extends LightningElement {
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

    handleCreateCase(){
        // logic to create a case would go here
    }

    get options() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
        ];
    }
    
}