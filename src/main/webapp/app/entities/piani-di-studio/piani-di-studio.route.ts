import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PianiDiStudioComponent } from './piani-di-studio.component';
import { PianiDiStudioDetailComponent } from './piani-di-studio-detail.component';
import { PianiDiStudioPopupComponent } from './piani-di-studio-dialog.component';
import { PianiDiStudioDeletePopupComponent } from './piani-di-studio-delete-dialog.component';

export const pianiDiStudioRoute: Routes = [
    {
        path: 'piani-di-studio',
        component: PianiDiStudioComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.pianiDiStudio.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'piani-di-studio/:id',
        component: PianiDiStudioDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.pianiDiStudio.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const pianiDiStudioPopupRoute: Routes = [
    {
        path: 'piani-di-studio-new',
        component: PianiDiStudioPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.pianiDiStudio.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'piani-di-studio/:id/edit',
        component: PianiDiStudioPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.pianiDiStudio.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'piani-di-studio/:id/delete',
        component: PianiDiStudioDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'safApp.pianiDiStudio.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
