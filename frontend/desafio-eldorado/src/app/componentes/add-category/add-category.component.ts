import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})

export class AddCategoryComponent implements OnInit { 
  name : String='';
  categorys : Category[]=[];
  categorySelected : String='';

  constructor(private categoryService: CategoryService,private router:Router, private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(
      res => {
        this.categorys = res;
        console.log(res)
      }, 
        err=> console.log(err)
    );
  }

  addCategory() {
    if(this.name.length == 0 ) {
      alert('Name is required')
      this.router.navigate(['/add-category'])
    }else{
      this.categoryService.addCategory(this.name).subscribe(
        res=>{
          console.log('Category Add!');
          this.router.navigate(['/category'])
        },
        err=> console.log(err)
        );
    }
  }

}
