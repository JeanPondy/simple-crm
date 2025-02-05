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


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule, FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  birthDate: Date = new Date();
 
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {} 

  onNoClick(): void {
    this.dialogRef.close(); 
  }

  ngOnInit(): void {
      
  }

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user)
  }

}
