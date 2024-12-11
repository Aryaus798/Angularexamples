import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { TestComponent } from './test/test.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path:'', component:ExampleComponent},
  { path:'tst', component:TestComponent},
  { path:'std', component:StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
