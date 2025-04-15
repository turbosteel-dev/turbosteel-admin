import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-new-distributors',
  templateUrl: './new-distributors.component.html',
  styleUrls: ['./new-distributors.component.scss']
})
export class NewDistributorsComponent {
  aboutUsListForm!: FormGroup;
  isEdit = false;
  aboutUsUrl = '/api/distributors'
  companyListCategoryData: any;
  companyListUpdatedUrl: any;
  companyListData: any;
  responseData: any;
  imageUrlFile: File | null = null;
  imageUrlPreview: File | null = null;
  apiKey = 'jknbmygtcl8r8k97i0fgw049crqz2gmwzvtzoo3j3duwy1vh';
  updatedId: any;

  constructor(private activatedroute: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.buildForm();
    this.activatedroute.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.isEdit = true;
        this.loadcompanyLists(params.get('id'));
      } else {
        this.isEdit = false;
      }
    })
  }

  buildForm() {
    this.aboutUsListForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [''],
      phone: [''],
      taluk: [''],
      district: [''],
      pincode: [''],
      state: [''],
      country: [''],
      address: ['']
    })
  }

  loadcompanyLists(id: any) {
    this.companyListUpdatedUrl = this.aboutUsUrl + '/' + id;
    this.http.get(this.companyListUpdatedUrl).subscribe(response => {
      this.companyListData = response;
      console.log(this.companyListData)
      this.prePopulateForm();
    });
  }


  prePopulateForm() {
    this.aboutUsListForm.patchValue({
      name: this.companyListData.name,
      email: this.companyListData.email,
      phone: this.companyListData.phone,
      taluk: this.companyListData.taluk,
      district: this.companyListData.district,
      pincode: this.companyListData.pincode,
      state: this.companyListData.state,
      country: this.companyListData.country,
      address: this.companyListData.address,
    });
  }




  onSubmit() {
    if (this.isEdit == false) {
      if (this.aboutUsListForm.valid) {
        this.http.post(this.aboutUsUrl, this.aboutUsListForm.getRawValue()).subscribe(response => {
          console.log('data updated successfully:', response);
          this.snackBar.open('data updated successfully', '', { duration: 3000 });
          this.aboutUsListForm.reset();
          this.router.navigate(['/distributors'])
        });
      }
    }
    else if (this.isEdit == true) {
      let url = this.aboutUsUrl + '/' + this.updatedId;
      this.http.put(this.companyListUpdatedUrl,  this.aboutUsListForm.getRawValue()).subscribe(response => {
        this.responseData = response;
        this.router.navigate(['/distributors'])
        this.snackBar.open('Data updated successfully', '', { duration: 3000 });
      }, error => {
        console.error('Error updating data:', error);
      });
    }
  }
}

