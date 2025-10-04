import { LightningElement } from 'lwc';

export default class TeacherComponent extends LightningElement {
    askStudentQuestion() {
        const student = this.template.querySelector('c-student-component');
        if (student) {
            student.askQuestionToTeacher(); // ✅ calls method in child
        }
    }
}
