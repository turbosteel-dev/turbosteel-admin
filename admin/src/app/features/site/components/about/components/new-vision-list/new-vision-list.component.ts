import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-new-vision-list',
  templateUrl: './new-vision-list.component.html',
  styleUrls: ['./new-vision-list.component.scss']
})
export class NewVisionListComponent {
 aboutUsListForm!: FormGroup;
  isEdit = false;
  aboutUsUrl = '/api/vision/visionList'
  companyListCategoryData: any;
  companyListUpdatedUrl: any;
  companyListData: any;
  responseData: any;
  imageUrlFile: File | null = null;
  imageUrlPreview: File | null = null;


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
      imageUrl: [''],
      title: ['', Validators.required],
      description: [''],
      url: [''],
      lists: this.formBuilder.array([]),
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
    if (this.companyListData.lists.length > 0) {
      for (let i = 0; i < this.companyListData.lists.length; i++) {
        this.onAddNewLists();
      }
      this.aboutUsListForm.patchValue({
        lists: this.companyListData.lists,
      })
    }
    this.aboutUsListForm.patchValue({
      title: this.companyListData.title,
      description: this.companyListData.description,
      url: this.companyListData.url,
      imageUrl: this.companyListData.imageUrl,
    });
  }


  get lists() {
    return <FormArray>this.aboutUsListForm.get('lists');
  }

  onAddLists() {
    return this.formBuilder.group({
      list_title: [''],
    });
  }

  onAddNewLists() {
    (this.aboutUsListForm.get('lists')! as FormArray).push(this.onAddLists());
  }


  OnDeleteLists(index: any) {
    if (index != 0) {
      (this.aboutUsListForm.get('lists')! as FormArray).removeAt(index);
    }
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
        formData.append('title', this.aboutUsListForm.get('title')?.value);
        formData.append('description', this.aboutUsListForm.get('description')?.value);
        formData.append('url', this.aboutUsListForm.get('url')?.value);
        formData.append(
          'lists',
          JSON.stringify(this.aboutUsListForm.get('lists')?.value)
        );
        this.http.post(this.aboutUsUrl, formData).subscribe(response => {
          console.log('data updated successfully:', response);
          this.snackBar.open('data updated successfully', '', { duration: 3000 });
          this.aboutUsListForm.reset();
          this.router.navigate(['/site/vision/vision-list'])
        });
      }
    }
    else if (this.isEdit == true) {

      const formData = new FormData();
      if (this.imageUrlFile) {
        formData.append('imageUrl', this.imageUrlFile);
      }

      formData.append('title', this.aboutUsListForm.get('title')?.value);
      formData.append('description', this.aboutUsListForm.get('description')?.value);
      formData.append('url', this.aboutUsListForm.get('url')?.value);
      formData.append(
        'lists',
        JSON.stringify(this.aboutUsListForm.get('lists')?.value)
      );
      this.http.put(this.companyListUpdatedUrl, formData).subscribe(response => {
        this.responseData = response;
        this.router.navigate(['/site/vision/vision-list'])
        this.snackBar.open('Data updated successfully', '', { duration: 3000 });
      }, error => {
        console.error('Error updating data:', error);
      });
    }
  }
}

