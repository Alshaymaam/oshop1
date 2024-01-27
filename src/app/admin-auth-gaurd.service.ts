import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AdminAuthGaurdService implements CanActivate{
    constructor(private auth:AuthService) { }
 
    canActivate():Observable<boolean>
    { return this.auth.appUser$.map(AppUser=>AppUser!.isAdmin)}
}
