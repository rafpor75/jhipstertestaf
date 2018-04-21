import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SafFacoltaModule } from './facolta/facolta.module';
import { SafAnnoAccademicoModule } from './anno-accademico/anno-accademico.module';
import { SafCdlModule } from './cdl/cdl.module';
import { SafDocentiModule } from './docenti/docenti.module';
import { SafMaterieModule } from './materie/materie.module';
import { SafPianiDiStudioModule } from './piani-di-studio/piani-di-studio.module';
import { SafSediModule } from './sedi/sedi.module';
import { SafStudentiModule } from './studenti/studenti.module';
import { SafTutorModule } from './tutor/tutor.module';
import { SafEsamiModule } from './esami/esami.module';
import { SafNoteEsameModule } from './note-esame/note-esame.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SafFacoltaModule,
        SafAnnoAccademicoModule,
        SafCdlModule,
        SafDocentiModule,
        SafMaterieModule,
        SafPianiDiStudioModule,
        SafSediModule,
        SafStudentiModule,
        SafTutorModule,
        SafEsamiModule,
        SafNoteEsameModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SafEntityModule {}
