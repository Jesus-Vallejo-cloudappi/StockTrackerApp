import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { DateTransformPipe } from './pipes/date-transform.pipe';


@NgModule({
  declarations: [LoadingComponent, DateTransformPipe],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    DateTransformPipe
  ]
})
export class SharedModule { }
