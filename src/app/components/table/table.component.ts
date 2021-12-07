import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  //The data shown in the table is obtained in the pages components,
  //and the table receives them through an Input.
  @Input() tableCharacters: Character[] = [];

  @Output() changeHouse: EventEmitter<string>;

  //"page" lets jump from 5 to 5 results.
  public page: number = 0;

  //"pageCount" controls the current page number. Prevents pagination from jumping to an empty page.
  public pageCount: number = 1;

  //"finalPage" It is used to hide the "Next" button when the user reaches the last page of the table.
  public finalPage: number = 1;

  //Attribute that is passed to the filter pipe to show in the table only results with that match.
  public keyword: string = '';

  //Only to show / hide loading icon
  public loading = true;

  public showHouseSelect = false;

  constructor( private router: Router ) {

    this.changeHouse = new EventEmitter();
  }

  ngOnInit(): void {

    //Show Hogwart's house filter only if user is on character page.
    if(this.router.url === '/characters')
      this.showHouseSelect = true;
  }

  ngOnChanges(changes: SimpleChanges) {

    //Detects if an array is received through the input and counts which is the last page.
    this.finalPage = Math.ceil(changes.tableCharacters.currentValue.length / 5);

    //Small delay for loading icon to be seen. It can be removed
    setTimeout( () => { this.loading = false; }, 200);
  }

  //Show the following page of results in the table.
  nextPage() {

    if( this.pageCount < this.finalPage ) {
      this.page += 5;
      this.pageCount++;
    }
  }

  //Show the previous page of results in the table.
  prevPage() {

    if( this.page > 0 ) {
      this.page -= 5;
      this.pageCount--;
    }
  }

  onKeywordFilter( keyword: string ) {

    this.page = 0;
    this.keyword = keyword;
  }

  //It alerts from the Table component to the Characters page if the user wants to change the house.
  onSelectHouse() {

    const house_selected = ((document.getElementById("house-select") as HTMLInputElement).value);

    this.changeHouse.emit(house_selected);

    this.page = 0;
    this.pageCount = 1;
  }
}
