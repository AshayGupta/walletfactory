import { ActionSheetController, ActionSheet } from 'ionic-angular'
import { Injectable } from '@angular/core';

@Injectable()
export class ActionsheetService {

    private actionSheet: ActionSheet

    constructor(private actionSheetCtrl: ActionSheetController) { }

    ActionSheet = {
        profilePicSheet: () => {
            return new Promise((resolve, reject) => {
                this.actionSheet = this.actionSheetCtrl.create({
                    title: 'Profile Photo',
                    enableBackdropDismiss: true,
                    buttons: [
                        {
                            text: 'Gallery',
                            // role: 'destructive',
                            handler: () => {
                                resolve('gallery');
                            }
                        },
                        {
                            text: 'Camera',
                            handler: () => {
                                resolve('camera')
                            }
                        },
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                this.actionSheet.present();
            });
        }
    }


}