import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

//Additional imports
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { ReactiveFormsModule } from '@angular/forms';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [ SignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form returns invalid if not all fields are filled', () => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const name = component.form.controls['name'];
    name.setValue('Merlín');

    expect(component.form.invalid).toBeTrue();
  });

  it('form returns valid if all required fields are filled', () => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const name = component.form.controls['name'];
    const patronus = component.form.controls['patronus'];
    const age = component.form.controls['age'];

    name.setValue('Merlín');
    patronus.setValue('star');
    age.setValue(80);

    expect(component.form.valid).toBeTrue();
  });

  it('component method gets requests list correctly from localStorage', () => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let list_set = []
    let list_get = [];

    const newStudent = {
      name: 'Merlín',
      patronus: 'star',
      age: 80,
      image: ''
    }

    list_set.push(newStudent);
    localStorage.setItem("requests", JSON.stringify( list_set ));

    list_get = JSON.parse(localStorage.getItem('requests'));

    component.loadRequests();

    expect(component.listOfRequests).toEqual(list_get);
  });
});
