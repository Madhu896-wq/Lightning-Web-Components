import { LightningElement, api } from 'lwc';

export default class GrandchildComponent extends LightningElement {
    @api isFavorite;   // receives from Child
}
