// angular
import { Component, Input } from "@angular/core";
// app
import { LogService, AuthService, DialogService } from "~/app/modules/core/services";
import { ITrack } from "models/track.model";
import { PlayerService } from "../../services";

@Component({
  moduleId: module.id,
  selector: 'track-list',
  templateUrl: 'track-list.component.html',
})
export class TrackListComponent {
  constructor(
    private authService: AuthService,
    private logService: LogService,
    private dialogService: DialogService,
    public playerService: PlayerService,
  ) {
    this.logService.inspect(playerService.tracks);
   }

  public record(track: ITrack, usernameAttempt?:string) {
    this.logService.debug('tab record', AuthService.CURRENT_USER);
    if(AuthService.CURRENT_USER) {
      this.dialogService.confirm(
        'Are you sure you want to re-record this track?',
      ).then((ok) => {
        if (ok) this._navToRecord(track);
      });

    } else {

      this.authService.promptLogin(
        'Provide an email and password to record.',
        usernameAttempt
      ).then(this._navToRecord.bind(this, track), (usernameAttempt) => {
        // initiate sequence again
        this.record(track, usernameAttempt);
      })
    }
  }

  private _navToRecord(track: ITrack) {
    // TODO: navigate to record screen
    this.logService.debug('yes, re-record', track)
  }
}
