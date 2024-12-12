import { Component, Inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EtudiantService } from '../services/etudiant.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';






@Component({
  selector: 'app-emp-add-edit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule,
    MatNativeDateModule,ReactiveFormsModule],
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css'],
})
export class EmpAddEditComponent implements OnInit {

  empForm: FormGroup;


  constructor(private _fb: FormBuilder, private _empService: EtudiantService, private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    this.empForm = this._fb.group({
      nom: '',
      prenom: '',
      email: '',
      classe: '',
      datenaiss: '',
      adresse: '',
    });
  }
 
  ngOnInit(): void {
  // throw new Error('Method not implemented.');
   this.empForm.patchValue(this.data)
  }

  onFormSubmit(){
    if(this.empForm.valid){
    if(this.data){
      this._empService.modifierEtudiant(this.data.id, this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Etudiant Modifier');
          this._dialogRef.close(true);
        },
         error: (err: any) => {
           console.error('Error:', err);
         },
       });
      }
     else {
      this._empService.AjouterEtudiant(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Etudiant Ajouter avec success');
          this._dialogRef.close(true);
        },
         error: (err: any) => {
           console.error('Error:', err);
         },
       });
  
    }
 
    }
  }
}
