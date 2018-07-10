import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from "./star.component";
import { ConvertToSpaceipe } from "./convert-to-spaces-pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StarComponent, ConvertToSpaceipe],
  exports: [StarComponent, ConvertToSpaceipe, CommonModule, FormsModule]
})
export class SharedModule { }
