// angular
import { Injectable } from "@angular/core";
// libs
import { Observable, Subject, interval } from "rxjs";
import { map } from "rxjs/operators";
// app
import { ITrack, CompositionModel, TrackPlayerModel, IComposition } from "shared/models";

@Injectable()
export class PlayerService {
    public playing$: Subject<boolean> = new Subject();
    public duration$: Subject<number> = new Subject();
    public currentTime$: Observable<number>;

    // active composition
    private _composition: CompositionModel;
    private _playing: boolean;
    private _trackPlayers: TrackPlayerModel[] = [];
    private _longestTrack: TrackPlayerModel;
    public tracks: ITrack[] = [];
    constructor() {
        this.currentTime$ = interval(1000)
            .pipe(
                map(_ => this._longestTrack ? this._longestTrack.player.currentTime : 0)
            );
        this.tracks = [
            { name: "Guitars", solo: true },
            { name: "Vocals", solo: false },
        ];
    }

    public set playing(value: boolean) {
        this._playing = value;
        this.playing$.next(value);
    }

    public get playing() {
        return this._playing;
    }

    public set composition(comp: CompositionModel) {
        this._composition = comp;

        // reset
        this._resetTrackPlayers();
        this._initTrackPlayers();
        this._updateTotalDuration();
    }

    private _initTrackPlayers() {
        let initTrackPlayer = (track: ITrack) => {
            let trackPlayer = new TrackPlayerModel();
            trackPlayer.load(track).then(_ => {
                this._trackPlayers.push(trackPlayer);
            });
        }
        this._composition.tracks.forEach(initTrackPlayer);
    }

    private _updateTotalDuration() {
        let totalDuration = Math.max(...this._trackPlayers.map(t => t.duration));

        for (let t of this._trackPlayers) {
            if (t.duration === totalDuration) {
                this._longestTrack = t;
                break;
            }
        }
        this.duration$.next(totalDuration);
    }

    private _resetTrackPlayers() {
        for (let t of this._trackPlayers) {
            t.cleanup();
        }
        this._trackPlayers = [];
    }

    public get composition() { return this._composition }


    public togglePlay() {
        this.playing = !this.playing;
        this.playing ? this.play() : this.pause();
    }

    public play(): void {
        for (let t of this._trackPlayers) {
            t.player.play();
        }
    }

    public pause(): void {
        for (let t of this._trackPlayers) {
            t.player.pause();
        }
    }

    public addTrack(track: ITrack): void {
        this.tracks.push(track);
    }

    public removeTrack(track: ITrack): void {
        let index = this.getTrackIndex(track);
        if (index > -1) {
            this.tracks.splice(index, 1);
        }
    }

    public reorderTrack(track: ITrack, newIndex: number): void {
        let index = this.getTrackIndex(track);
        if (index > -1) {
            this.tracks.splice(newIndex, 0, this.tracks.splice(index, 1)[0])
        }
    }

    private getTrackIndex(track: ITrack): number {
        let index = -1;
        for (let i = 0; i < this.tracks.length; i++) {
            if (this.tracks[i].filepath === track.filepath) {
                index = i;
                break;
            }
        }
        return index;
    }

    private _demoComposition(): IComposition[] {
        return [
            {
                id: 1,
                name: "Demo",
                created: Date.now(),
                order: 0,
                tracks: [
                    {
                        id: 1,
                        name: 'Drums',
                        order: 0,
                        filepath: '~/audio/drums.mp3'
                    },
                    {
                        id: 2,
                        name: 'Bass',
                        order: 1,
                        filepath: '~/audio/bass.mp3'
                    },
                    {
                        id: 3,
                        name: 'Piano',
                        order: 2,
                        filepath: '~/audio/piano.mp3'
                    }
                ] // tracks
            }
        ]
    }
}
