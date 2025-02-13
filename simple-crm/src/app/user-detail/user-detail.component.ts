import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})

export class UserDetailComponent {
  userId: string | null = null;
  user: User = new User;
  constructor(
    private route: ActivatedRoute, 
    private firestore: Firestore, 
    public dialog: MatDialog) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log('GOT ID:',  this.userId);
    if (this.userId) {
      this.getUser();
    }
  }

  async getUser() {
    try {
      const userDocRef = doc(this.firestore, 'users', this.userId!); // Verweis auf das spezifische Dokument
      const userSnap = await getDoc(userDocRef); // Dokument auslesen
      
      if (userSnap.exists()) {
          // Type Assertion
        this.user = userSnap.data() as User; // Daten speichern, wenn das Dokument existiert
        console.log('Retrieved user:', this.user);
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  openAddressDialog(){}

  editUserDetail(){
    this.dialog.open(DialogEditAddressComponent);
   
  }
  
  editMenu(){
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
  }

}


/* getUser(){
  this.firestore
  .collections('users')
  .doc(this.userId)
  .valuesChanges()
  .subscribe((user: any) => {
    this.user = user;
    console.log('Retrieved user', this.user)
  })
} */