import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-career-list',
  templateUrl: './new-career-list.component.html',
  styleUrls: ['./new-career-list.component.scss']
})
export class NewCareerListComponent {
  apiKey = 'jknbmygtcl8r8k97i0fgw049crqz2gmwzvtzoo3j3duwy1vh';
  bannerForm!: FormGroup;
    bannerUrl = '/api/career/careerList';
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


    editorConfig = {
      plugins: 'lists link image imagetools table code help wordcount media',
      toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | image | help',
      branding: false,
      image_advtab: true,
      file_picker_callback: (callback: any, value: string, meta: any) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
    
        input.addEventListener('change', (event: any) => {
          const file = event.target.files[0];
          const reader = new FileReader();
    
          reader.onload = () => {
            callback(reader.result as string, { title: file.name });
          };
          reader.readAsDataURL(file);
        });
    
        input.click();
      }
    };
  
    buildForm() {
      this.bannerForm = this.formBuilder.group({
        title: [''],
        sub_description: [''],
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
        sub_description: this.bannerData.sub_description,
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
            this.router.navigate(['/site/career/career-list']);
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
          this.router.navigate(['/site/career/career-list']);
        }, error => {
          console.error('Error updating data:', error);
        });
      }
    }
  }

