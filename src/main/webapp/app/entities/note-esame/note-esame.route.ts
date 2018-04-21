import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { NoteEsameComponent } from './note-esame.component';
import { NoteEsameDetailComponent } from './note-esame-detail.component';
import { NoteEsamePopupComponent } from './note-esame-dialog.component';
import { NoteEsameDeletePopupComponent } from './note-esame-delete-dialog.component';

export const noteEsameRoute: Routes = [
    {
        path: 'note-esame',
        component: NoteEsameComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.noteEsame.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'note-esame/:id',
        component: NoteEsameDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.noteEsame.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const noteEsamePopupRoute: Routes = [
    {
        path: 'note-esame-new',
        component: NoteEsamePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.noteEsame.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'note-esame/:id/edit',
        component: NoteEsamePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.noteEsame.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'note-esame/:id/delete',
        component: NoteEsameDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.noteEsame.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
