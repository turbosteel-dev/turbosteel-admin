import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-new-certification-detail',
  templateUrl: './new-certification-detail.component.html',
  styleUrls: ['./new-certification-detail.component.scss']
})
export class NewCertificationDetailComponent {
  aboutUsListForm!: FormGroup;
  isEdit = false;
  aboutUsUrl = '/api/certification/certificationDetails'
  companyListCategoryData: any;
  companyListUpdatedUrl: any;
  companyListData: any;
  responseData: any;
  imageUrlFile: File | null = null;
  imageUrlPreview: File | null = null;
  apiKey = 'jknbmygtcl8r8k97i0fgw049crqz2gmwzvtzoo3j3duwy1vh';
  categoryData: any;
  categoryUrl = '/api/certification/certficartionCategory';
  reportFile: File | null = null;


  constructor(private activatedroute: ActivatedRoute, private formBuilder: FormBuilder, private http: HttpService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.buildForm();
    this.loadData();
    this.activatedroute.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.isEdit = true;
        this.loadcompanyLists(params.get('id'));
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
    this.aboutUsListForm = this.formBuilder.group({
      imageUrl: [''],
      filesData: [''],
      certification_url: [''],
      title: [''],
    })
  }

  loadData() {
    this.http.get(this.categoryUrl).subscribe(response => {
      this.categoryData = response;
    });
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
      title: this.companyListData.title,
      certification_url: this.companyListData.certification_url,
      imageUrl: this.companyListData.imageUrl,
      filesData: this.companyListData.filesData,
    });
  }


  get lists() {
    return <FormArray>this.aboutUsListForm.get('lists');
  }

  onFileChange(event: any, type: string) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      switch (type) {
        case 'imageUrl':
          this.imageUrlFile = file;
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.imageUrlPreview = e.target.result;
          }
          reader.readAsDataURL(file);
          break;
        case 'filesData':
          this.reportFile = file;
          break;
        default:
          console.warn('Unknown file type:', type);
      }
    }
  }

  onSubmit() {
    if (this.isEdit == false) {
      if (this.aboutUsListForm.valid) {
        const formData = new FormData();
        if (this.imageUrlFile) {
          formData.append('imageUrl', this.imageUrlFile);
        }
        if (this.reportFile) {
          formData.append('filesData', this.reportFile);
        }
        formData.append('certification_url', this.aboutUsListForm.get('certification_url')?.value);
        formData.append('title', this.aboutUsListForm.get('title')?.value);
        this.http.post(this.aboutUsUrl, formData).subscribe(response => {
          console.log('data updated successfully:', response);
          this.snackBar.open('data updated successfully', '', { duration: 3000 });
          this.aboutUsListForm.reset();
          this.router.navigate(['/site/certification/certification-detail'])
        });
      }
    }
    else if (this.isEdit == true) {

      const formData = new FormData();
      if (this.imageUrlFile) {
        formData.append('imageUrl', this.imageUrlFile);
      }
      if (this.reportFile) {
        formData.append('filesData', this.reportFile);
      }
      formData.append('certification_url', this.aboutUsListForm.get('certification_url')?.value);
      formData.append('title', this.aboutUsListForm.get('title')?.value);
      this.http.put(this.companyListUpdatedUrl, formData).subscribe(response => {
        this.responseData = response;
        this.router.navigate(['/site/certification/certification-detail'])
        this.snackBar.open('Data updated successfully', '', { duration: 3000 });
      }, error => {
        console.error('Error updating data:', error);
      });
    }
  }
}


