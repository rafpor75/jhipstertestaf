import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafSharedModule } from '../../shared';
import {
    EsamiService,
    EsamiPopupService,
    EsamiComponent,
    EsamiDetailComponent,
    EsamiDialogComponent,
    EsamiPopupComponent,
    EsamiDeletePopupComponent,
    EsamiDeleteDialogComponent,
    esamiRoute,
    esamiPopupRoute,
} from './';

const ENTITY_STATES = [
    ...esamiRoute,
    ...esamiPopupRoute,
];

@NgModule({
    imports: [
        SafSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        EsamiComponent,
        EsamiDetailComponent,
        EsamiDialogComponent,
        EsamiDeleteDialogComponent,
        EsamiPopupComponent,
        EsamiDeletePopupComponent,
    ],
    entryComponents: [
        EsamiComponent,
        EsamiDialogComponent,
        EsamiPopupComponent,
        EsamiDeleteDialogComponent,
        EsamiDeletePopupComponent,
    ],
    providers: [
        EsamiService,
        EsamiPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafEsamiModule {}
