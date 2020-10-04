import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getVideos(): Observable<any> {
    return this.firestore.collection('videos').snapshotChanges();
  }

}
