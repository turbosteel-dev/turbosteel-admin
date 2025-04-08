import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EditorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule
  ],
  exports: [
    EditorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule

  ]
})
export class SharedModule { }
