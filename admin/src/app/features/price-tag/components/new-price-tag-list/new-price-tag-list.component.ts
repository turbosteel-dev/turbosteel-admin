import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-new-price-tag-list',
  templateUrl: './new-price-tag-list.component.html',
  styleUrls: ['./new-price-tag-list.component.scss']
})
export class NewPriceTagListComponent {
  aboutUsListForm!: FormGroup;
  isEdit = false;
  aboutUsUrl = '/api/priceTag/priceTag'
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
      title: ['', Validators.required],
      description: [''],
      url: ['']
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
      description: this.companyListData.description,
      url: this.companyListData.url
    });
  }




  onSubmit() {
    if (this.isEdit == false) {
      if (this.aboutUsListForm.valid) {
        this.http.post(this.aboutUsUrl, this.aboutUsListForm.getRawValue()).subscribe(response => {
          console.log('data updated successfully:', response);
          this.snackBar.open('data updated successfully', '', { duration: 3000 });
          this.aboutUsListForm.reset();
          this.router.navigate(['/price-tag'])
        });
      }
    }
    else if (this.isEdit == true) {
      let url = this.aboutUsUrl + '/' + this.updatedId;
      this.http.put(this.companyListUpdatedUrl,  this.aboutUsListForm.getRawValue()).subscribe(response => {
        this.responseData = response;
        this.router.navigate(['/price-tag'])
        this.snackBar.open('Data updated successfully', '', { duration: 3000 });
      }, error => {
        console.error('Error updating data:', error);
      });
    }
  }
}
