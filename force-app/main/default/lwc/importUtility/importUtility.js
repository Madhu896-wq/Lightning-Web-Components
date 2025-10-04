import { LightningElement } from 'lwc';
import MYLOGO from "@salesforce/resourceUrl/RP";
import USER_INFO from "@salesforce/user/Id";
import DEVICE_INFO from "@salesforce/client/formFactor";
import LANG from "@salesforce/i18n/lang";
import LOCALE_SET from "@salesforce/i18n/locale";




export default class ImportUtility extends LightningElement {
    myPic = MYLOGO;
    userId = USER_INFO;
    deviceInfo = DEVICE_INFO;
    devicelang = LANG;
    setter = LOCALE_SET;
}