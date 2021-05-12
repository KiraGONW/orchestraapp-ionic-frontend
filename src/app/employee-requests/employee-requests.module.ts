import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { IonicModule } from '@ionic/angular';

import { EmployeeRequestsPageRoutingModule } from './employee-requests-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { EmployeeRequestsPage } from './employee-requests.page';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatExpansionModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeRequestsPageRoutingModule,
    MatFormFieldModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
  ],
  declarations: [EmployeeRequestsPage]
})
export class EmployeeRequestsPageModule {}
