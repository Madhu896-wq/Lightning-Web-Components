import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';
import CASE_NUMBER from "@salesforce/schema/Case.CaseNumber";
import TYPE_FIELD from "@salesforce/schema/Case.Type";
import ORIGIN_FIELD from "@salesforce/schema/Case.Origin";

export default class LoadRecordWithoutOfField extends LightningElement {
    @api recordId;

    // ✅ Use actual schema imports, not string names
    fields = [CASE_NUMBER, TYPE_FIELD, ORIGIN_FIELD];

    @wire(getRecord, { recordId: '$recordId', fields: '$fields' })
    caseVar;

    get casenumber() {
        return getFieldValue(this.caseVar.data, CASE_NUMBER);
    }

    get origin() {
        return getFieldValue(this.caseVar.data, ORIGIN_FIELD);
    }

    get type() {
        return getFieldValue(this.caseVar.data, TYPE_FIELD);
    }
}
