import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatInputModule, MatFormFieldModule,MatButtonModule, FormsModule, MatProgressBarModule ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent implements OnInit {
  user: User = new User(); 
  isLoading: boolean = false;
  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) {}

  ngOnInit(){}

  saveUser(){}
}






