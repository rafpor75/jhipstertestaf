import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafSharedModule } from '../../shared';
import {
    FacoltaService,
    FacoltaPopupService,
    FacoltaComponent,
    FacoltaDetailComponent,
    FacoltaDialogComponent,
    FacoltaPopupComponent,
    FacoltaDeletePopupComponent,
    FacoltaDeleteDialogComponent,
    facoltaRoute,
    facoltaPopupRoute,
    FacoltaResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...facoltaRoute,
    ...facoltaPopupRoute,
];

@NgModule({
    imports: [
        SafSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        FacoltaComponent,
        FacoltaDetailComponent,
        FacoltaDialogComponent,
        FacoltaDeleteDialogComponent,
        FacoltaPopupComponent,
        FacoltaDeletePopupComponent,
    ],
    entryComponents: [
        FacoltaComponent,
        FacoltaDialogComponent,
        FacoltaPopupComponent,
        FacoltaDeleteDialogComponent,
        FacoltaDeletePopupComponent,
    ],
    providers: [
        FacoltaService,
        FacoltaPopupService,
        FacoltaResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafFacoltaModule {}
