import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { EsamiComponent } from './esami.component';
import { EsamiDetailComponent } from './esami-detail.component';
import { EsamiPopupComponent } from './esami-dialog.component';
import { EsamiDeletePopupComponent } from './esami-delete-dialog.component';

export const esamiRoute: Routes = [
    {
        path: 'esami',
        component: EsamiComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.esami.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'esami/:id',
        component: EsamiDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.esami.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const esamiPopupRoute: Routes = [
    {
        path: 'esami-new',
        component: EsamiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.esami.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'esami/:id/edit',
        component: EsamiPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.esami.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'esami/:id/delete',
        component: EsamiDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.esami.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
