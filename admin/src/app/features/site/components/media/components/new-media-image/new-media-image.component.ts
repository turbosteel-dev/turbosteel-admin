import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-new-media-image',
  templateUrl: './new-media-image.component.html',
  styleUrls: ['./new-media-image.component.scss']
})
export class NewMediaImageComponent {
  bannerForm!: FormGroup;
  bannerUrl = '/api/media/mediaDetail';
  categoryUrl = '/api/media/mediaCategory';
  categoryData:any;
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
    this.loadData();
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


  loadData() {
    this.httpService.get(this.categoryUrl).subscribe(response => {
      this.categoryData = response;
    });
  }

  buildForm() {
    this.bannerForm = this.formBuilder.group({
      title: [''],
      mediaCategoryUrlId: [''],
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
      mediaCategoryUrlId: this.bannerData.mediaCategoryUrlId,
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
        formData.append('mediaCategoryUrlId', this.bannerForm.get('mediaCategoryUrlId')?.value);
        this.imageFiles.forEach(file => {
          formData.append('imageUrl', file);
        });
        this.httpService.post(this.bannerUrl, formData).subscribe(response => {
          this.snackBar.open('Banner added successfully', '', { duration: 3000 });
          this.bannerForm.reset();
          this.router.navigate(['/site/media/media-image']);
        },
          error => console.error('Error adding banner:', error)
        );
      }
    }
    else if (this.isEdit == true) {
      let url = this.bannerUrl + '/' + this.updatedId;
      const formData = new FormData();

      formData.append('title', this.bannerForm.get('title')?.value);
      formData.append('mediaCategoryUrlId', this.bannerForm.get('mediaCategoryUrlId')?.value);
      this.imageFiles.forEach(file => {
        formData.append('imageUrl', file);
      });
      this.httpService.put(url, formData).subscribe(response => {
        this.responseData = response;
        this.snackBar.open('Banner updated successfully', '', { duration: 3000 });
        this.router.navigate(['/site/media/media-image']);
      }, error => {
        console.error('Error updating banner:', error);
      });
    }
  }
}
