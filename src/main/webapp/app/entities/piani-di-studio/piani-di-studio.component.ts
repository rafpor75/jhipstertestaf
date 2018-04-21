import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { PianiDiStudio } from './piani-di-studio.model';
import { PianiDiStudioService } from './piani-di-studio.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-piani-di-studio',
    templateUrl: './piani-di-studio.component.html'
})
export class PianiDiStudioComponent implements OnInit, OnDestroy {
pianiDiStudios: PianiDiStudio[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private pianiDiStudioService: PianiDiStudioService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.pianiDiStudioService.query().subscribe(
            (res: HttpResponse<PianiDiStudio[]>) => {
                this.pianiDiStudios = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInPianiDiStudios();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: PianiDiStudio) {
        return item.id;
    }
    registerChangeInPianiDiStudios() {
        this.eventSubscriber = this.eventManager.subscribe('pianiDiStudioListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
