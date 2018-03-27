import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirestoreService } from '../shared/service/firestore.service';
import { Cliente } from './cliente';

@Injectable()
export class ClienteService extends FirestoreService<Cliente> {

  constructor(private db: AngularFirestore) {
    super(db, '/clientes');
  }

}
