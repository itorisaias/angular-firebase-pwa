import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  QueryFn
} from 'angularfire2/firestore';
import { CollectionReference } from '@firebase/firestore-types';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class FirestoreService<T> {
  public data: AngularFirestoreCollection<T>;

  constructor(protected _db: AngularFirestore, protected path: string) {
    this.setTasks();
  }

  private setTasks(queryFn?: QueryFn): void {
    this.data = this._db.collection<T>(this.path, queryFn);
  }

  public create(task: T): Promise<void> {
    const uid = this._db.createId();
    return this.data.doc<T>(uid).set(task);
  }

  public update(data: T): Promise<void> {
    const uid = this._db.createId();
    return this.data.doc<T>(data['uuid']).update(data);
  }

  public delete(task: T): Promise<void> {
    return this.data.doc<T>(task['uuid']).delete();
  }

  public get(uuid: string): Observable<T> {
    return this.data.doc<T>(uuid).valueChanges();
  }
}
