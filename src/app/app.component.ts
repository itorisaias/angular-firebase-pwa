import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'app';
  // public items: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    // this.items = db.collection('/items').valueChanges();
  }
}
