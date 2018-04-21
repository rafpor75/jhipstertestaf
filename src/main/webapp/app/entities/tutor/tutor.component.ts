import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Tutor } from './tutor.model';
import { TutorService } from './tutor.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-tutor',
    templateUrl: './tutor.component.html'
})
export class TutorComponent implements OnInit, OnDestroy {
tutors: Tutor[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private tutorService: TutorService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.tutorService.query().subscribe(
            (res: HttpResponse<Tutor[]>) => {
                this.tutors = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInTutors();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Tutor) {
        return item.id;
    }
    registerChangeInTutors() {
        this.eventSubscriber = this.eventManager.subscribe('tutorListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
