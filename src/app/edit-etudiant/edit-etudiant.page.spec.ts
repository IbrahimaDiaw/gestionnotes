import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditEtudiantPage } from './edit-etudiant.page';

describe('EditEtudiantPage', () => {
  let component: EditEtudiantPage;
  let fixture: ComponentFixture<EditEtudiantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEtudiantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
