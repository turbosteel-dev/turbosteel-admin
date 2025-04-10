import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-new-in-house-detail',
  templateUrl: './new-in-house-detail.component.html',
  styleUrls: ['./new-in-house-detail.component.scss']
})
export class NewInHouseDetailComponent {
  aboutUsListForm!: FormGroup;
  isEdit = false;
  aboutUsUrl = '/api/inHouse/InHouseDetail';
  companyListCategoryData: any;
  companyListUpdatedUrl: any;
  companyListData: any;
  responseData: any;
  imageUrlFile: File | null = null;
  imageUrlFileTwo: File | null = null;
  imageUrlPreview: File | null = null;
  imageUrlPreviewTwo: File | null = null;
  apiKey = 'jknbmygtcl8r8k97i0fgw049crqz2gmwzvtzoo3j3duwy1vh';
  categoryData: any;

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
      imageTwoUrl: [''],
      sub_title: [''],
      title: ['', Validators.required],
      description: [''],
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
      title: this.companyListData.title,
      sub_title: this.companyListData.sub_title,
      description: this.companyListData.description,
      imageTwoUrl: this.companyListData.imageTwoUrl,
      imageUrl: this.companyListData.imageUrl,
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
          case 'imageTwoUrl':
            this.imageUrlFileTwo = file;
            const rreader = new FileReader();
            rreader.onload = (e: any) => {
              this.imageUrlPreviewTwo = e.target.result;
            }
            rreader.readAsDataURL(file);
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
        if (this.imageUrlFileTwo) {
          formData.append('imageTwoUrl', this.imageUrlFileTwo);
        }
        formData.append('sub_title', this.aboutUsListForm.get('sub_title')?.value);
        formData.append('title', this.aboutUsListForm.get('title')?.value);
        formData.append('description', this.aboutUsListForm.get('description')?.value);
        this.http.post(this.aboutUsUrl, formData).subscribe(response => {
          console.log('data updated successfully:', response);
          this.snackBar.open('data updated successfully', '', { duration: 3000 });
          this.aboutUsListForm.reset();
          this.router.navigate(['/site/inhouse/inhouse-detail'])
        });
      }
    }
    else if (this.isEdit == true) {

      const formData = new FormData();
      if (this.imageUrlFile) {
        formData.append('imageUrl', this.imageUrlFile);
      }
      if (this.imageUrlFileTwo) {
        formData.append('imageTwoUrl', this.imageUrlFileTwo);
      }
      formData.append('sub_title', this.aboutUsListForm.get('sub_title')?.value);
      formData.append('title', this.aboutUsListForm.get('title')?.value);
      formData.append('description', this.aboutUsListForm.get('description')?.value);
      this.http.put(this.companyListUpdatedUrl, formData).subscribe(response => {
        this.responseData = response;
        this.router.navigate(['/site/inhouse/inhouse-detail'])
        this.snackBar.open('Data updated successfully', '', { duration: 3000 });
      }, error => {
        console.error('Error updating data:', error);
      });
    }
  }
}


