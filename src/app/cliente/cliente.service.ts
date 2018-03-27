import { Injectable } from '@angular/core';
import { FirestoreService } from '../shared/service/firestore.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService extends FirestoreService<Cliente> {

  constructor(private db: AngularFirestore) {
    super(db, '/clientes');
  }

}
