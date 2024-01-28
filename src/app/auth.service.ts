import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import* as firebase from 'firebase/auth';
import { Observable, of, switchMap} from 'rxjs';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user$: Observable<any>;
  constructor(private afAuth:AngularFireAuth, private route:ActivatedRoute, private userService:UserService) {
    this.user$= afAuth.authState;
   }
  login(){

    let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl')||'/';
    localStorage.setItem('returnUrl',returnUrl);
    this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.signOut();

  }
  get appUser$() : Observable<AppUser | null>{
    return this.user$.pipe(
      switchMap(
        user => {
          if(user)
          return this.userService.get(user.uid).valueChanges();

        return of(null)}))

  }
}
