import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user.class'; 
import { Firestore, collection, getDocs } from '@angular/fire/firestore'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatCardModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = []; 
 /*  displayedColumns: string[] = ['firstName', 'lastName', 'city', 'street', 'zipCode', 'birthDate'];  */

  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit(): void {
    this.loadUsers(); 
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }

  async loadUsers() {
    try {
      const usersCollection = collection(this.firestore, 'users');
      const userSnapshot = await getDocs(usersCollection);
      this.users = userSnapshot.docs.map(doc => new User({ id: doc.id, ...doc.data() }));
      console.log('Received changes from DB:', this.users);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  }
}
