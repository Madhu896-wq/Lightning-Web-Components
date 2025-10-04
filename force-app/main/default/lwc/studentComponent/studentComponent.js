import { LightningElement, api } from 'lwc';

export default class StudentComponent extends LightningElement {
    question = '';
    answer = '';

    @api
    askQuestionToTeacher() {
        this.question = 'Who is the father of Nation ?';
        this.answer = 'Mahatama Gandhi';
    }
}
