import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditAddressComponent } from './dialog-edit-address.component';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Firestore } from '@angular/fire/firestore';




describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DialogEditAddressComponent, 
        NoopAnimationsModule ],
        providers: [
          {
            provide: MatDialogRef,
            useValue: {} // Mock für MatDialogRef
          },
          {
            provide: MAT_DIALOG_DATA,
            useValue: {} // Mock für Dialog-Daten
          },
          {
            provide: Firestore,
            useValue: {} // Mock für Firestore
          }
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
