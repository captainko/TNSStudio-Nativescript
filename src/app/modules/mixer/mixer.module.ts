// nativescript
import { NativeScriptRouterModule } from 'nativescript-angular/router';
// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';

// app
import { SharedModule } from '../shared/shared.module';
import { PlayerModule } from '../player/player.module';
import { MixerComponent } from './components/mixer.component';
import { BaseComponent } from './components/base.component';
import { MixListComponent } from './components/mix-list.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { PROVIDERS } from './services';

const COMPONENTS: any[] = [
    ActionBarComponent,
    BaseComponent,
    MixerComponent,
    MixListComponent,
];



const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            { path: 'home', component: MixListComponent },
            { path: ':id', component: MixerComponent },
        ]
    },
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        PlayerModule,
        SharedModule,
        NativeScriptRouterModule.forChild(routes),
    ],
    providers: [...PROVIDERS],
    schemas: [NO_ERRORS_SCHEMA],
})
export class MixerModule { }
