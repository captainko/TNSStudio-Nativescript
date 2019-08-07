// angular
import { Component, Input, OnInit, OnDestroy } from "@angular/core";

// libs
import { Subscription, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";


// app
import { LogService } from "~/app/modules/core/services";
import { PlayerService } from "../../services";
import { CompositionModel } from "shared/models";

@Component({
    moduleId: module.id,
    selector: 'player-controls',
    templateUrl: 'player-controls.component.html',
})
export class PlayerControlsComponent implements OnInit, OnDestroy {
    @Input() composition: CompositionModel;

    // ui state
    public currentTime: number = 0;
    public duration: number = 0;
    public playStatus: string = 'Play';


    // manage subscriptions

    private _subCurrentTime: Subscription;
    private _destroy$: Subject<boolean> = new Subject();
    constructor(
        private logService: LogService,
        private playerService: PlayerService,
    ) { }

    ngOnInit() {
        this.playerService.playing$
            .pipe(takeUntil(this._destroy$))
            .subscribe((playing: boolean) => {
                this._updateStatus(playing);

                if (playing) {
                    this._subCurrentTime = this.playerService.currentTime$
                        .pipe(takeUntil(this._destroy$))
                        .subscribe((currTime: number) => {
                            this.currentTime = currTime;
                        });

                } else if (this._subCurrentTime) {
                    this._subCurrentTime.unsubscribe();
                }
            });

        this.playerService.duration$
            .pipe(takeUntil(this._destroy$))
            .subscribe((duration: number) => {
                this.duration = duration;
            })
    }

    ngOnDestroy() {
        this._destroy$.next(true);
        this._destroy$.unsubscribe();
    }

    public togglePlay() {
        this.playerService.togglePlay();
    }


    private _updateStatus(playing: boolean) {
        this.playStatus = playing ? 'Stop' : 'Play';
    }
}
