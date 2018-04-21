import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafSharedModule } from '../../shared';
import {
    TutorService,
    TutorPopupService,
    TutorComponent,
    TutorDetailComponent,
    TutorDialogComponent,
    TutorPopupComponent,
    TutorDeletePopupComponent,
    TutorDeleteDialogComponent,
    tutorRoute,
    tutorPopupRoute,
} from './';

const ENTITY_STATES = [
    ...tutorRoute,
    ...tutorPopupRoute,
];

@NgModule({
    imports: [
        SafSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TutorComponent,
        TutorDetailComponent,
        TutorDialogComponent,
        TutorDeleteDialogComponent,
        TutorPopupComponent,
        TutorDeletePopupComponent,
    ],
    entryComponents: [
        TutorComponent,
        TutorDialogComponent,
        TutorPopupComponent,
        TutorDeleteDialogComponent,
        TutorDeletePopupComponent,
    ],
    providers: [
        TutorService,
        TutorPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafTutorModule {}
