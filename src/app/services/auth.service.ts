import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/switchMap';
import { AngularFireAuthModule } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {}

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((value: any) => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/profile');
    })
    .catch((err: any) => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((value: any) => {
     console.log('Sucess', value);
     this.router.navigateByUrl('/profile');
    })
    .catch((error: any) => {
      console.log('Something went wrong: ', error);
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then((value: any) => {
     console.log('Sucess', value),
     this.router.navigateByUrl('/profile');
   })
    .catch((error: any) => {
      console.log('Something went wrong: ', error);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
