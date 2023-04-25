// import { FileAttachmentReq } from './../../dataModels/file-attachment.model';
import {Observable} from 'rxjs';
import { timer } from 'rxjs'; 
 

export class Utils {
 
    static formatDateDDMMYY(date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        var currentDate = new Date(date);

        // if (currentDate) {
        //     return date;
        // }
        var day = currentDate.getDate();
        var monthIndex = currentDate.getMonth();
        var year = currentDate.getFullYear();

        if (!day || !monthNames[monthIndex] || !year) {
            return date;
        }
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    static replaceCommaFromString(string) {
        var data = string.replace(/,/g, '');
        return data;
    }

    static formatDateYYDDMM(date) {
        var currentDate = new Date(date);
        var day = currentDate.getDate();
        var month = currentDate.getMonth() + 1;
        var year = currentDate.getFullYear();
        return year + '-' + ((month < 10) ? '0' + month : month) + '-' + ((day < 10) ? '0' + day : day);
    }


    // static startTimer(time?: number):  {
    //     return Observable.timer(0, 1000)
    //     // return timer(0, 5000)
    //         .take(time)
    //         .map(() => --time)
    // }

    static formData(obj) {
        const keys = Object.keys(obj);
        const form = new FormData();
        
        for(let i=0; i<keys.length; i++) {
            form.append(keys[i], obj[keys[i]]);
        }
        return form;
    }




}



    // static removeNull(obj) {
    //     if (obj == undefined || obj == NaN) {
    //         return '';
    //     }
    //     else {
    //         return obj;
    //     }
    // }

    // static isEmpty(value): boolean {
    //     if (value == undefined || value == '' || value == null || NaN) {
    //         return true;
    //     }
    //     return false;
    // }

    // static autoIncID() {
    //     return Math.floor(100000 + Math.random() * 900000);
    // }

    // static roundOffValue(value) {
    //     var round = Math.round(value);
    //     return round;
    // }

    // static ceilValue(value) {
    //     var ceil = Math.ceil(value);
    //     return ceil;
    // }

    // static roundToDecimal(value: string, decimalCount: number): string {
    //     if (isNaN(parseFloat(value))) return '0.00';

    //     let dv = (parseFloat(value) * decimalCount);
    //     var finalValue = parseInt(dv.toString()) / decimalCount;
    //     return finalValue.toString();
    // }

    // static getLobID(name: string) {
    //     var lob = { "Life": "4", "Asset": "5", "GI": "6" };
    //     return lob[name];
    // }

    // static getLobName(id: string) {
    //     var lob = { "4": "Life", "5": "Asset", "6": "GI" };
    //     return lob[id];
    // }

    // static readFile(event) {
    //     return new Promise((resolve, reject) => {
    //         let fileObj: FileAttachmentReq = new FileAttachmentReq();
    //         const file: File = event.target.files[0];

    //         fileObj.fileName = file.name;
    //         fileObj.fileExtension = file.type;
    //         fileObj.fileSize = file.size;
    //         // fileObj.fileId = new Date().getTime().toString();

    //         const reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onload = () => {
    //             fileObj.base64File = reader.result;
    //         };
    //         resolve(fileObj);
    //     })

    // }


