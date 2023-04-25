import { ActionSheetController } from '@ionic/angular';
import { Injectable } from '@angular/core';

export interface ActionSheetInterface {
    header: string;
    subHeader?: string;
    buttons: any;
}

@Injectable()
export class ActionSheetService {

    constructor(private actionSheetCtrl: ActionSheetController) { }

    async create(opts: ActionSheetInterface) {
        const actionSheet = await this.actionSheetCtrl.create({
            header: opts.header,
            subHeader: opts.subHeader || '',
            buttons: opts.buttons || []
        });

        actionSheet.present();
        
        return await actionSheet.onWillDismiss();
    }
}