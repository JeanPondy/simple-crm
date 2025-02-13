import { CommonModule } from '@angular/common';
import { Component,OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { Firestore, doc, updateDoc, collection} from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})

    export class DialogEditUserComponent implements OnInit {
    user: User = new User(); 
    isLoading: boolean = false;
    birthDate!: Date;  

    userId: string = ''; 


    constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>,  private firestore: Firestore) {}
  
    ngOnInit(){
      console.log('User ID:', this.userId); 
    }
  
   async updateUser() {
      if (!this.userId) {
        console.error('userId is missing!');
        return;
      }
  
      this.isLoading = true;
  
      try {
        const userDocRef = doc(this.firestore, 'users', this.userId);
  
        await updateDoc(userDocRef, this.user.toJSON());
        
        console.log('User updated successfully:', this.user.toJSON());
        this.dialogRef.close();
        window.location.reload(); 
      } catch (error) {
        console.error('Error updating user:', error);
      } finally {
        this.isLoading = false;
      }
    }
}







