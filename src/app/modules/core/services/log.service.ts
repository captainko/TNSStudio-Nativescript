import { Injectable } from "@angular/core";

@Injectable()
export class LogService {
  public static ENABLE: boolean = true;

  public debug(msg: any, ...formatPrams: any[]) {
    if (LogService.ENABLE) {
      console.log(msg, formatPrams);
    }
  }

  public error(msg: any, ...formatPrams: any[]) {
    if (LogService.ENABLE) {
      console.error(msg, formatPrams);
    }
  }

  public inspect(obj: any) {
    if (LogService.ENABLE) {
      console.log(obj);
      console.log('typeof', typeof obj);
      if (obj) {
        console.log('constructor', obj.constructor.name);
        for (let key in obj) {
          console.log(`${key}:`, obj[key]);
        }
      }
    }
  }
};
