import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EtudiantService } from './services/etudiant.service';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule,
            MatButtonModule,
            MatIconModule, 
            MatDialogModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
           ReactiveFormsModule,
           MatTableModule,
           MatPaginatorModule,
           MatSortModule,
           HttpClientModule,
           MatInputModule,
           CommonModule,],
           
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {
  title = 'My CRUD Application';
  
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'classe','datenaiss','adresse', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _dialog: MatDialog, private _etdService: EtudiantService) {}
  ngOnInit(): void {
    this.getEtudiantlist();
  }

  openAddEditEmpForm() {
    const dialogRef=this._dialog.open(EmpAddEditComponent,); {
      
      dialogRef.afterClosed().subscribe((result) => {
        if(result){
          this.getEtudiantlist();
        }
      });
      
    }
  }
  getEtudiantlist(){
    this._etdService.getEtudiantlist().subscribe( {
     next: (res)=>{
     this.dataSource= new MatTableDataSource(res)
     this.dataSource.sort=this.sort;
     this.dataSource.paginator=this.paginator;
     },
     error: console.log
     

    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  suprimerEtudiant(id: number,){
    this._etdService.suprimerEtudiant(id).subscribe({
      next:(res)=>{
        alert('Etudiant Supprimer avec succes');
        this.getEtudiantlist();
    
      },
      error: console.log,
    });
  }
  openEditForm(data: any) {
    const dialogRef=this._dialog.open(EmpAddEditComponent,{
      data,
      
    }); 
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.getEtudiantlist();
      }
    });
      
      
    
  }
}
