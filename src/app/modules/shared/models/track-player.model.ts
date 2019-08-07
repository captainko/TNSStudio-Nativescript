// libs
import { TNSPlayer } from "nativescript-audio";

// app
import { ITrack } from "./track.model";

interface ITrackPlayer {
    trackId: number;
    duration: number;
    readonly player: TNSPlayer;
}

export class TrackPlayerModel implements ITrackPlayer {
    public trackId: number;
    public duration: number;
    private _player: TNSPlayer;
    constructor() {
        this._player = new TNSPlayer();
    }

    public async load(track: ITrack): Promise<number> {
        // return new Promise((res, rej) => {
        //     this.trackId = track.id;
        //     this._player.initFromFile({
        //         audioFile: track.filepath,
        //         loop: false,
        //     }).then(() => {

        //     })
        // })
        this.trackId = this.trackId;
        await this._player.initFromFile({
            audioFile: track.filepath,
            loop: false,
        });
        this.duration = +await this._player.getAudioTrackDuration();
        return;
    }

    public cleanup() {
        this._player.pause();
        // this._player.
    }

    public get player(): TNSPlayer {
        return this._player;
    }
}
