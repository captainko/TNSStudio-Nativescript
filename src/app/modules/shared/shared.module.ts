// nativescript
import { NativeScriptRouterModule } from 'nativescript-angular/router';
// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { PIPES } from '~/app/modules/shared/pipes/index';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

const MODULES: any[] = [
    NativeScriptRouterModule,
    NativeScriptCommonModule,
]

@NgModule({
    imports: [
        // NativeScriptModule,
        ...MODULES
    ],
    declarations: [
        ...PIPES
    ],
    exports: [
        ...PIPES,
        ...MODULES,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule { }
