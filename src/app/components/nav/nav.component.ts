import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  searchForm: FormGroup;
  constructor(private searchService:SearchService,
              private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      formSearchText: ['']
    });
  }

  onSubmit() {
    const searchTextValue = this.searchForm.get('formSearchText').value;
    this.searchService.changeSearchText(searchTextValue);
    console.log('Arama metni:', searchTextValue);
    // Burada arama metni ile yapılması istenen işlemleri gerçekleştirebilirsiniz.
  }



}
