export interface ITrack {
  id?: number;
  filepath?: string;
  name?: string;
  order?: number;
  volume?: number;
  solo?: boolean;
}

export class TrackModel implements ITrack {
  public filepath: string;
  public name: string;
  public order: number;
  public volume: number = 1;
  public solo: boolean;

  constructor(model: any) {
    if (model) {
      for (let key in model) {
        this[key] = model[key];
      }
    }
  }

}
