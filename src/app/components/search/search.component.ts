import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  constructor(private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.searchService.currentMessage.subscribe({
      next:value => {
        //navbarda search inputuna yazilan veriyi componente ulastim simdi backende bu veriyi gondermek kaldi
        console.log(value)
      },error:err => {

      }
    })
  }
}
