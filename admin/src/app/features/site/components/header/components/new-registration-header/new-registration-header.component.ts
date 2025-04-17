import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-registration-header',
  templateUrl: './new-registration-header.component.html',
  styleUrls: ['./new-registration-header.component.scss']
})
export class NewRegistrationHeaderComponent {
  bannerForm!: FormGroup;
    bannerUrl = '/api/header/registrationHeader';
    isEdit = false;
    responseData: any;
    bannerData: any;
    bannerUpdatedUrl = '';
    updatedId: any;
    imageFiles: File[] = [];
    imageUrlFile: File | null = null;
    imageUrlPreview: File | null = null;
  
    constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private httpService: HttpService, private router: Router, private snackBar: MatSnackBar) { }
  
  
    ngOnInit() {
      this.buildForm();
      this.activatedRoute.paramMap.subscribe(params => {
        this.updatedId = params.get('id');
        if (params.get('id')) {
          this.isEdit = true;
          this.loadBannerData(params.get('id'));
        } else {
          this.isEdit = false;
        }
      })
    }


  
    buildForm() {
      this.bannerForm = this.formBuilder.group({
        title: [''],
        url: [''],
        description: ['']
      })
    }
  
    
    loadBannerData(id: any) {
      this.httpService.get(this.bannerUrl + '/' + id).subscribe(res => {
        this.bannerData = res;
        this.preFormData();
      })
  
    }
    preFormData() {
      this.bannerForm.patchValue({
        title: this.bannerData.title,
        url: this.bannerData.url,
        description: this.bannerData.description
      });
    }
  
  
  
    onSubmit() {
      if (this.isEdit == false) {
        if (this.bannerForm.valid) {
          this.httpService.post(this.bannerUrl, this.bannerForm.getRawValue()).subscribe(response => {
            this.snackBar.open('Banner added successfully', '', { duration: 3000 });
            this.bannerForm.reset();
            this.router.navigate(['/site/header/registration-header']);
          },
            error => console.error('Error adding data:', error)
          );
        }
      }
      else if (this.isEdit == true) {
        let url = this.bannerUrl + '/' + this.updatedId;
        this.httpService.put(url, this.bannerForm.getRawValue()).subscribe(response => {
          this.responseData = response;
          this.snackBar.open('data updated successfully', '', { duration: 3000 });
          this.router.navigate(['/site/header/registration-header']);
        }, error => {
          console.error('Error updating data:', error);
        });
      }
    }
  }

