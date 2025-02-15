import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import { MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUserComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {} // Mock für MatDialogRef, um den Dialog zu simulieren
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {} // Mock für Daten, die in den Dialog übergeben werden
        },
        {
          provide: Firestore,
          useValue: {} // Mock für Firestore
        }

      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});