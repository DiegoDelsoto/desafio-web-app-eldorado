import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, CategoryService } from 'src/app/services/category.service';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  category : String='';
  color : String='';
  partNumber : String='';
  categorys : Category[]=[];
  categorySelected : String='';

  constructor(private deviceService: DeviceService,private router:Router, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(
      res => {
        this.categorys = res;
        console.log(res)
      }, 
        err=> console.log(err)
    );
  }
  
  addDevice() {
    if(this.categorySelected.length==0 || this.color.length==0 || this.partNumber.length == 0) {
      alert('Category, Color and Part Number is required')
      this.router.navigate(['/add-device'])
    }else {
      this.deviceService.addDevice(this.categorySelected, this.color, this.partNumber).subscribe(
        res=>{
          console.log('Device Add!');
          this.router.navigate(['/device'])
        },
        err=> console.log(err)
        );
      }
  }
}
