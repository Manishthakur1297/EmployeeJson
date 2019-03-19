import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { DisplayComponent } from './display/display.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{
  path: 'home', 
  component: HomeComponent
},
{
  path: 'create', 
  component: CreateComponent
},
{
  path: 'display', 
  component: DisplayComponent
},
{
  path: 'search', 
  component: SearchComponent
},
{
  path: 'delete', 
  component: DeleteComponent
},
{
  path: 'update', 
  component: UpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
