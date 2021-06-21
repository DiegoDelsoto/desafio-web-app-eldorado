import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categoty',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorys : Category[]=[];
  
  constructor(private categoryService: CategoryService, private router:Router) {     
  }
  
  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(
      res => {
        this.categorys = res;
        console.log(res)
      }, 
        err=> console.log(err)
    );
  }
  
  
  deleteById(id:string)
  {
    this.categoryService.deleteCategory(id).subscribe(
      res=>{
        console.log('Category deleted!');
        this.ngOnInit();
      },
      err=> console.log(err)
      );
  }

}

  
