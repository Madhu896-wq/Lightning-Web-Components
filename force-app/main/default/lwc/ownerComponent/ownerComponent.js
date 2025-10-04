import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {
   name = 'Krishna teja';
   brands = [
    {id:1,year:2024, Model: 'Thar Roxee', car:'Mahindra'},
    {id:2,year:2022, Model: 'Carnival', car:'KIA'},
    {id:3,year:2020, Model: 'Xuv700', car:'Mahindra'}
   ];

   movies = ['bahubali', 'pushpa', 'fauji', 'Mirai'];
}