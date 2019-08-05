// nativescript
import { NativeScriptRouterModule } from 'nativescript-angular/router';

// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { PIPES } from '~/app/modules/shared/pipes/index';

@NgModule({
    imports: [
        // NativeScriptModule,
        NativeScriptRouterModule,
    ],
    declarations: [
        ...PIPES
    ],
    exports: [
        ...PIPES,
        NativeScriptRouterModule,

    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule { }
