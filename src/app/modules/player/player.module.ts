// nativescript
// angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
// app
import { PROVIDERS } from "./services";
import { COMPONENTS } from './components';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    imports: [SharedModule],
    providers: [...PROVIDERS],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    schemas: [NO_ERRORS_SCHEMA],
})
export class PlayerModule { }
