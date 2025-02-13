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
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

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
          this.user = new User(userSnap.data() as User); // Daten speichern, wenn das Dokument existiert
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
    const dialog = this.dialog.open( DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    console.log('userId beim Öffnen des Dialogs:', this.userId);
    dialog.componentInstance.userId = this.userId!; 
  
   
  }
  
  editMenu(){
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    console.log('userId beim Öffnen des Dialogs:', this.userId);
    dialog.componentInstance.userId = this.userId!; 
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