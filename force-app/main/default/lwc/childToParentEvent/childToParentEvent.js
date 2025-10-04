import { LightningElement } from 'lwc';

export default class ChildToParentEvent extends LightningElement {
    receiedProducts = [];

    handleProductList(event){
        this.receiedProducts  = event.detail;
    }
}