import { Injectable } from "@angular/core";

import { Route, CanActivate, CanLoad } from '@angular/router';
import { AuthService } from 'services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService) { }

    canActivate(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (this._isAuth()) {
                resolve(true);
            } else {
                // login sequence to continue prompting
                let promptSequence = (usernameAttempt?: string) => {
                    this.authService.promptLogin('Authenticate to record', usernameAttempt)
                        .then(
                            () => resolve(true),
                            (usernameAttempt) => {
                                if (usernameAttempt === false) resolve(false);
                                else {
                                    promptSequence(usernameAttempt);
                                }
                            }
                        )
                }
            }
        })
    }
    canLoad(route: Route): Promise<boolean> {
        return this.canActivate();
    }

    private _isAuth(): boolean {
        return this.authService.authenticated$.getValue();
    }
};
