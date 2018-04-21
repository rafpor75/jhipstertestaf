import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { NoteEsame } from './note-esame.model';
import { NoteEsameService } from './note-esame.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-note-esame',
    templateUrl: './note-esame.component.html'
})
export class NoteEsameComponent implements OnInit, OnDestroy {
noteEsames: NoteEsame[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private noteEsameService: NoteEsameService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.noteEsameService.query().subscribe(
            (res: HttpResponse<NoteEsame[]>) => {
                this.noteEsames = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInNoteEsames();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: NoteEsame) {
        return item.id;
    }
    registerChangeInNoteEsames() {
        this.eventSubscriber = this.eventManager.subscribe('noteEsameListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
