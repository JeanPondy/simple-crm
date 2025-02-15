import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
/* import { AsyncPipe } from '@angular/common'; */
import { Firestore, collection, collectionData, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule , MatToolbarModule, MatIconModule, MatSidenavModule, RouterModule, FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'items'); // Firestore-Sammlung referenzieren
    const q = query(aCollection); // Query daraus machen
    this.items$ = collectionData(q, { idField: 'id' }); // `idField` hinzufügen, um Dokument-ID zu bekommen
  }


}
