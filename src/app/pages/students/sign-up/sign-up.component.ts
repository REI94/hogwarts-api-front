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

  //This function receives the formControlName of form fields,
  //and if any do not satisfy the validations specified in the FormBuilder then it returns false.
  public invalidInput(nameInput: string) {

    return this.form['controls'][nameInput].invalid && this.form['controls'][nameInput].touched;
  }

  //prepareRequest() first verifies that the form is valid and then
  //obtains from the HTML the image that will be saved in the localStorage.
  prepareRequest() {


    if(this.form.valid) {

      //Get image file from HTML.
      const imageFile = ((document.getElementById("image") as HTMLInputElement).files);

      //Convert the image to a valid format to save it.
      this.handleFileSelect(imageFile);
    }
  }

  handleFileSelect(files){

    const file = files[0];  //If multiple images were uploaded, it gets only the first one.

    if (files && file) {  //If user uploaded an image, proceed to convert it.
        let reader = new FileReader();

        reader.onload = this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
    else {  //Otherwise, save the form without assigning an image to the user.
      this.saveRequest();
    }
  }

  //Converts the image in Base64-encoded format to be able to save it in the localStorage as a string.
  _handleReaderLoaded(readerEvt) {

    const binaryString = readerEvt.target.result;
    const base64textString = btoa(binaryString);
    this.saveRequest(base64textString);
  }

  saveRequest(base64textString: string = '') {

    //Once everything is verified, the information of the form is saved in an object.
    const newStudent = {
      name: this.form['controls'].name.value,
      patronus: this.form['controls'].patronus.value,
      age: this.form['controls'].age.value,
      image: base64textString
    }

    //Gets the requests array saved in the localStorage (if it exists), and appends the new request in the last position.
    this.loadRequests();

    this.listOfRequests = this.listOfRequests || [];  //Check that it is an array to avoid problems when using .push()
    this.listOfRequests.push(newStudent);

    localStorage.setItem("requests", JSON.stringify( this.listOfRequests ));

    //Once the request is saved, the form is reset and user is redirected to the requests page.
    this.form.reset();
    this.router.navigateByUrl('/students/requests');
  }

  loadRequests() {

    this.listOfRequests = JSON.parse(localStorage.getItem('requests'));
  }
}
