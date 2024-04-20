import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.scss']
})
export class ValidationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  requiredValidation = formControlName => {
    return formControlName.touched && formControlName.hasError('required');
  };

  patternValidation = formControlName => {
    return formControlName.touched && formControlName.hasError('pattern');
  };

  lengthValidation = formControlName => {
    return (
      formControlName.touched &&
      (formControlName.hasError('minlength') ||
        formControlName.hasError('maxlength'))
    );
  };

  /**
  * 
  * @param fileName - file Name
  * @param type  - values is files or "" (here "" means images)
  */
   checkExtension(fileName: string, type: string = ''): boolean {
    let valid = true;
    let arr = fileName.split('.');
    let ext = arr[arr.length - 1];
    var allowedExtensions = type ? ['DOC', 'DOCX', 'PDF', 'XLS', 'XLSX', 'CSV', 'PPT', 'PNG', 'JPG', 'JPEG', 'BMP', 'TIF', 'TIFF'] : ['PNG', 'JPG', 'JPEG', 'BMP', 'TIF', 'TIFF'];
    if (allowedExtensions.indexOf(ext.toUpperCase()) == -1) {
      valid = false;
    }
    return valid;
  }


}
