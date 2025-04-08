import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-new-social-media',
  templateUrl: './new-social-media.component.html',
  styleUrls: ['./new-social-media.component.scss']
})
export class NewSocialMediaComponent {
bannerForm!: FormGroup;
  bannerUrl = '/api/home/socialMedia';
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
      description: [''],
      imageUrl: ['', Validators.required]
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
      description: this.bannerData.description,
      imageUrl: this.bannerData.imageUrl
    });
  }

  onFileChange(event: any, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.imageFiles = Array.from(input.files);
      const file = input.files[0];
      switch (type) {
        case 'imageUrl':
          this.imageUrlFile = file;
         const reader = new FileReader();
         reader.onload = (e:any) =>{
          this.imageUrlPreview = e.target.result;
         }
         reader.readAsDataURL(file);
          break;
        default:
          console.warn('Unknown file type:', type);
      }
    }
  }

  onSubmit() {
    if (this.isEdit == false) {
      if (this.bannerForm.valid) {
        const formData = new FormData();

        formData.append('title', this.bannerForm.get('title')?.value);
        formData.append('description', this.bannerForm.get('description')?.value);
        this.imageFiles.forEach(file => {
          formData.append('imageUrl', file);
        });
        this.httpService.post(this.bannerUrl, formData).subscribe(response => {
          this.snackBar.open('data added successfully', '', { duration: 3000 });
          this.bannerForm.reset();
          this.router.navigate(['/site/home/social-media']);
        },
          error => console.error('Error adding data:', error)
        );
      }
    }
    else if (this.isEdit == true) {
      let url = this.bannerUrl + '/' + this.updatedId;
      const formData = new FormData();

      formData.append('title', this.bannerForm.get('title')?.value);
      formData.append('description', this.bannerForm.get('description')?.value);
      this.imageFiles.forEach(file => {
        formData.append('imageUrl', file);
      });
      this.httpService.put(url, formData).subscribe(response => {
        this.responseData = response;
        this.snackBar.open('data updated successfully', '', { duration: 3000 });
        this.router.navigate(['/site/home/social-media']);
      }, error => {
        console.error('Error updating data:', error);
      });
    }
  }
}
