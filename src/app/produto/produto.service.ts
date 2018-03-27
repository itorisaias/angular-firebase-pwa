import { Injectable } from '@angular/core';
import { FirestoreService } from '../shared/service/firestore.service';
import { Produto } from './produto';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ProdutoService extends FirestoreService<Produto> {

  constructor(private db: AngularFirestore) {
    super(db, '/produtos');
  }

}
