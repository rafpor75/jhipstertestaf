/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { SafTestModule } from '../../../test.module';
import { FacoltaDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/facolta/facolta-delete-dialog.component';
import { FacoltaService } from '../../../../../../main/webapp/app/entities/facolta/facolta.service';

describe('Component Tests', () => {

    describe('Facolta Management Delete Component', () => {
        let comp: FacoltaDeleteDialogComponent;
        let fixture: ComponentFixture<FacoltaDeleteDialogComponent>;
        let service: FacoltaService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [SafTestModule],
                declarations: [FacoltaDeleteDialogComponent],
                providers: [
                    FacoltaService
                ]
            })
            .overrideTemplate(FacoltaDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(FacoltaDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(FacoltaService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
