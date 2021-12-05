import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  listOfRequests: Character[] = [];

  constructor( private fb: FormBuilder, private router: Router ) {

    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      patronus: ['', [Validators.required, Validators.maxLength(50)]],
      age: ['', [Validators.required, Validators.min(1)]],
      image: ['']  //If the user does not load an image, another one is assigned by default
    });
  }

  public validInput(nameInput: string) {

    return this.form['controls'][nameInput].invalid && this.form['controls'][nameInput].touched;
  }

  prepareRequest() {

    if(this.form.valid) {

      //Get image file from HTML
      const imageFile = ((document.getElementById("image") as HTMLInputElement).files);

      //Convert the image to a valid format to save it
      this.handleFileSelect(imageFile);
    }
  }

  saveRequest(base64textString: string = '') {

    const newStudent = {
      name: this.form['controls'].name.value,
      patronus: this.form['controls'].patronus.value,
      age: this.form['controls'].age.value,
      image: base64textString
    }

    this.loadRequests();

    this.listOfRequests = this.listOfRequests || [];  //Check that it is an array to avoid problems when using .push()
    this.listOfRequests.push(newStudent);

    localStorage.setItem("requests", JSON.stringify( this.listOfRequests ));

    this.form.reset();
    this.router.navigateByUrl('/students/requests');
  }

  loadRequests() {

    this.listOfRequests = JSON.parse(localStorage.getItem('requests'));
  }

  handleFileSelect(files){

    const file = files[0];

    if (files && file) {
        let reader = new FileReader();

        reader.onload = this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
    else {
      this.saveRequest();
    }
  }

  _handleReaderLoaded(readerEvt) {

    const binaryString = readerEvt.target.result;
    const base64textString = btoa(binaryString);
    this.saveRequest(base64textString);
  }
}
