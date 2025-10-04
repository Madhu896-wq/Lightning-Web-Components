import {  LightningElement,api } from 'lwc';

export default class ContainerComponent extends LightningElement {
      @api names ;
      @api brands;
      @api movies;
      companies = ['tcs','Inosys', 'wipro'];

}