import { LightningElement } from 'lwc';

export default class IteratorComponent extends LightningElement {
    tasks = [
        { Id:1,name: 'MobileFrame', status:'completed', country :'US'},
        {Id:2, name: 'RMS', status:'Yet to Start', country :'UK'},
        { Id:3,name: 'CDA', status:'In Progress', country: 'Germany'}

    ]
}