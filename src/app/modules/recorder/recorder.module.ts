// nativescript
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

// angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

// app
import { PROVIDERS } from "./services";


@NgModule({
  imports: [],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [...PROVIDERS],
})
export class RecorderModule { }
