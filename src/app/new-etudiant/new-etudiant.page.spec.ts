import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewEtudiantPage } from './new-etudiant.page';

describe('NewEtudiantPage', () => {
  let component: NewEtudiantPage;
  let fixture: ComponentFixture<NewEtudiantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEtudiantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewEtudiantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
