// nativescript
// angular
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
// app
import { PROVIDERS } from "./services";
import { CoreModule } from "../core/core.module";
import { PlayerControlsComponent } from "./components/player-controls/player-controls.component";
import { TrackListComponent } from "./components/track-list/track-list.component";


@NgModule({
    imports: [CoreModule],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [...PROVIDERS],
    declarations: [
        PlayerControlsComponent,
        TrackListComponent
    ],
    exports: [
        PlayerControlsComponent,
        TrackListComponent
    ],
})
export class PlayerModule { }
