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

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatNativeDateModule, FormsModule, MatProgressBarModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})

    export class DialogEditUserComponent implements OnInit {
    user!: User;
    isLoading: boolean = false;
    birthDate!: Date;  


    constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {}
  
    ngOnInit(){}
  
    saveUser(){}
}







