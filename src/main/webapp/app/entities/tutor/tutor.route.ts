import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { TutorComponent } from './tutor.component';
import { TutorDetailComponent } from './tutor-detail.component';
import { TutorPopupComponent } from './tutor-dialog.component';
import { TutorDeletePopupComponent } from './tutor-delete-dialog.component';

export const tutorRoute: Routes = [
    {
        path: 'tutor',
        component: TutorComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.tutor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'tutor/:id',
        component: TutorDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.tutor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tutorPopupRoute: Routes = [
    {
        path: 'tutor-new',
        component: TutorPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.tutor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tutor/:id/edit',
        component: TutorPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.tutor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tutor/:id/delete',
        component: TutorDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.tutor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
