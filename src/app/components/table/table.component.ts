import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableCharacters: Character[];

  @Output() changeHouse: EventEmitter<string>;

  //"page" lets jump from 5 to 5 results.
  public page: number = 0;

  //"pageCount" controls the current page number. Prevents pagination from jumping to an empty page.
  public pageCount: number = 1;

  //"finalPage" It is used to hide the "Next" button when the user reaches the last page of the table.
  public finalPage: number = 1;

  public keyword: string = '';

  public showHouseSelect = false;

  constructor( private router: Router ) {

    this.changeHouse = new EventEmitter();
  }

  ngOnInit(): void {

    if(this.router.url === '/characters')
      this.showHouseSelect = true;
  }

  ngOnChanges(changes: SimpleChanges) {

    //Detects if an array is received through the input and counts which is the last page.
    this.finalPage = Math.ceil(changes.tableCharacters.currentValue.length / 5);
  }

  nextPage() {

    if( this.pageCount < this.finalPage ) {
      this.page += 5;
      this.pageCount++;
    }
  }

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

  onSelectHouse() {

    const house_selected = ((document.getElementById("house-select") as HTMLInputElement).value);

    this.changeHouse.emit(house_selected);

    this.page = 0;
    this.pageCount = 1;
  }
}
