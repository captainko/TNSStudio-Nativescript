// libs
import { TNSPlayer } from "nativescript-audio";

import * as fileSystemModule from "tns-core-modules/file-system";

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
        this._player.debug = true;
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
        await this._player.playFromFile({
            audioFile: getAudioFile(track.filepath),
            loop: false,
        });
        this.duration = +await this._player.getAudioTrackDuration();
        console.log('hello2',this.duration);
        return;

    }

    // public load(track: ITrack): Promise<number> {
    //     return new Promise((resolve, reject) => {
    //         this.trackId = track.id;

    //         this._player.initFromFile({
    //             audioFile: track.filepath,
    //             loop: false,
    //             completeCallback: console.log,
    //             errorCallback: console.log,
    //         }).then(() => {
    //             this._player.getAudioTrackDuration().then((duration) => {
    //                 this.duration = +duration;
    //                 resolve();
    //             })
    //         })
    //     });
    // }


    public cleanup() {
        this._player.pause();
        // this._player.
    }

    public get player(): TNSPlayer {
        return this._player;
    }
}


function getAudioFile(filepath: string) {
    let split = filepath.split('/');
    let filename = split[split.length-1];
    return  fileSystemModule
        .knownFolders.documents()
        .getFolder('app')
        .getFolder('app')
        .getFolder('audio')
        .getFile(filename).path;
}

const documents = fileSystemModule.knownFolders.documents().getFolder('app').getFolder('app').getFolder('audio');
const folder = documents.getEntities().then((a) => console.log('hello3', a));
// const file = folder.getFile('drums.mp3');
console.log('hello',documents.contains('piano.mp3'));
