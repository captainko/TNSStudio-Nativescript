import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MixerComponent } from './components/mixer.component';
import { BaseComponent } from './components/base.component';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { PlayerModule } from '../player/player.module';

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            { path: 'home', component: MixerComponent }
        ]
    }
]

@NgModule({
    declarations: [
        MixerComponent,
        BaseComponent
    ],
    imports: [
        PlayerModule,
        NativeScriptRouterModule.forChild(routes),
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class MixerModule { }
