import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device, DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  devices : Device[]=[];

  constructor(private deviceService: DeviceService, private router:Router) { 
  }

  ngOnInit(): void {
    this.deviceService.getAllDevice().subscribe(
      res => {
        this.devices = res;
        console.log(res)
      }, 
        err=> console.log(err)
    );
  }

  deleteDeviceById(id:string)
  {
    this.deviceService.deleteDevice(id).subscribe(
      res=>{
        console.log('Device deleted!');
        this.ngOnInit();
      },
      err=> console.log(err)
      );
  }

}
