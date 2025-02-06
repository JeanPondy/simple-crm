import { Component, OnInit } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCalendarBody, MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class'; 
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [CommonModule , MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  birthDate: Date = new Date();
  isLoading = false; 
  

 
  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>, 
    private firestore: Firestore // Firestore per Konstruktor-Injection
  ) {} 

  onNoClick(): void {
    this.dialogRef.close(); 
  }

  ngOnInit(): void {
      
  }

  async saveUser() {
    this.isLoading = true;
    this.user.birthDate = this.birthDate.getTime(); // Datum in Timestamp umwandeln
    console.log('Current user is', this.user);

    try {
      const usersCollection = collection(this.firestore, 'users'); // Firestore-Collection referenzieren
      await addDoc(usersCollection, this.user.toJSON()); // User speichern
      console.log('User erfolgreich in Firestore gespeichert!');
      this.dialogRef.close(); // Dialog schließen nach Speichern
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
    } finally {
      this.isLoading = false; //  Ladebalken ausblenden
    }
  }

}
