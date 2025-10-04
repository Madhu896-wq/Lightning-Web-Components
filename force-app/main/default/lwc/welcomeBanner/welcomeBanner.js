import { LightningElement, api,track } from 'lwc';

export default class WelcomeBanner extends LightningElement {
    name = 'Krishna';
    name2 = 'Vyshu';
   @track myPersonality = {
        name :'King',
        Team:'DC'
    }
   @api myFavCoach = 'Gautham Gambhir';
}