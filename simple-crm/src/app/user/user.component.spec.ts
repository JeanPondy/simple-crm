import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { MatDialog } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [
        {
          provide: Firestore,
          useValue: {}  // Mock für Firestore, da keine echten Firebase-Calls benötigt werden
        },
        {
          provide: MatDialog,
          useValue: {
            open: () => {}  // Mock für MatDialog, um Dialoge zu simulieren
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/* ------------------------ erweiterung */

it('should call loadUsers on init', () => {
  spyOn(component, 'loadUsers');  // Überwacht die Methode loadUsers
  component.ngOnInit();           // Ruft ngOnInit auf
  expect(component.loadUsers).toHaveBeenCalled();  // Erwartet, dass loadUsers aufgerufen wurde
});

});