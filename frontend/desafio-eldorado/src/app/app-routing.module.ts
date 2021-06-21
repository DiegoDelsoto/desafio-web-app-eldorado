import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './componentes/add-category/add-category.component';
import { AddDeviceComponent } from './componentes/add-device/add-device.component';
import { CategoryComponent} from './componentes/category/category.component'
import { DeviceComponent } from './componentes/device/device.component';

const routes: Routes = [
  { path: 'category', component : CategoryComponent},
  { path: 'add-category', component : AddCategoryComponent},
  { path: 'device', component : DeviceComponent},
  { path: 'add-device', component : AddDeviceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
