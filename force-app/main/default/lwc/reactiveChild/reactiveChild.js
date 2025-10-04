import { LightningElement, api } from 'lwc';

export default class ReactiveChild extends LightningElement {
    @api userAddress;
    @api personalDetails;
}
