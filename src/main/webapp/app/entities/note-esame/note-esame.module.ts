import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SafSharedModule } from '../../shared';
import {
    NoteEsameService,
    NoteEsamePopupService,
    NoteEsameComponent,
    NoteEsameDetailComponent,
    NoteEsameDialogComponent,
    NoteEsamePopupComponent,
    NoteEsameDeletePopupComponent,
    NoteEsameDeleteDialogComponent,
    noteEsameRoute,
    noteEsamePopupRoute,
} from './';

const ENTITY_STATES = [
    ...noteEsameRoute,
    ...noteEsamePopupRoute,
];

@NgModule({
    imports: [
        SafSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        NoteEsameComponent,
        NoteEsameDetailComponent,
        NoteEsameDialogComponent,
        NoteEsameDeleteDialogComponent,
        NoteEsamePopupComponent,
        NoteEsameDeletePopupComponent,
    ],
    entryComponents: [
        NoteEsameComponent,
        NoteEsameDialogComponent,
        NoteEsamePopupComponent,
        NoteEsameDeleteDialogComponent,
        NoteEsameDeletePopupComponent,
    ],
    providers: [
        NoteEsameService,
        NoteEsamePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafNoteEsameModule {}
