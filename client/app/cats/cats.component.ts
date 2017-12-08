import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { CatService } from '../services/cat.service';
import { ToastComponent } from '../shared/toast/toast.component';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cat = {};
  cats = [];
  isLoading = true;
  isEditing = -1;

  addCatForm: FormGroup;
  location_address = new FormControl('',[]);
  rooms = new FormControl('',[]);
  size = new FormControl('',[]);
  price = new FormControl('',[]);
  // creator = new FormControl('',[]);
  description = new FormControl('',[]);
  level = new FormControl('',[]);


  constructor(private catService: CatService,
              private formBuilder: FormBuilder,
              public toast: ToastComponent) { }

  ngOnInit() {
    this.getCats();
    this.addCatForm = this.formBuilder.group({
      location_address: this.location_address,
      rooms: this.rooms,
      size: this.size,
      price: this.price,
      // creator: this.creator,
      description: this.description,
      level: this.level,
    });
  }

  getCats() {
    this.catService.getCats().subscribe(
      data => {
        this.cats = data;
        console.log('got cats', data);
      }, 
      error => console.log(error),
      () => this.isLoading = false
    );
    
  }

  addCat() {
    this.catService.addCat(this.addCatForm.value).subscribe(
      res => {
        const newCat = res.json();
        this.cats.push(newCat);
        this.addCatForm.reset();
        this.toast.setMessage('item added successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  enableEditing(cat, i) {
    this.isEditing = i;
    this.cat = cat;
  }

  cancelEditing(i) {
    this.isEditing = -1;
    this.cat = {};
    this.toast.setMessage('item editing cancelled.', 'warning');
    // reload the cats to reset the editing
    this.getCats();
  }

  editCat(cat) {
    this.catService.editCat(cat).subscribe(
      res => {
        this.isEditing = -1;
        this.cat = cat;
        this.toast.setMessage('item edited successfully.', 'success');
      },
      error => console.log(error)
    );
  }

  deleteCat(cat) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.catService.deleteCat(cat).subscribe(
        res => {
          const pos = this.cats.map(elem => elem._id).indexOf(cat._id);
          this.cats.splice(pos, 1);
          this.toast.setMessage('item deleted successfully.', 'success');
        },
        error => console.log(error)
      );
    }
  }

}
