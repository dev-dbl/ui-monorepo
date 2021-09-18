import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { Event, EventsService } from '@dbl-dev/events';

@Component({
  selector: 'flpa-camps-form',
  templateUrl: './camps-form.component.html',
  styleUrls: ['./camps-form.component.scss']
})
export class CampsFormComponent implements OnInit {

  form: FormGroup;
  isSubmitted = false;
  editMode = false;
  camp: Event;
  imagePreview: string | ArrayBuffer | null;
  imagesPreview: any[];
  removeImages: string[] = [];
  responsiveOptions: any[];

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private eventsService: EventsService, private messageService: MessageService, private location: Location) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 2
      }
    ];
  }

  ngOnInit(): void {
    this._initForm();
    this._checkEditMode();
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
      addImages: ['']
    });
  }

  private _checkEditMode() {
    this.route.params.subscribe(params => {
      if (params.campId) {
        this.editMode = true;
        this._getCamp(params.campId);
      }
    });
  }

  private _getCamp(campId: string) {
    this.eventsService.getEvent(campId).subscribe(res => {
      this.camp = res;

      this.campForm.name.setValue(this.camp.name);
      this.campForm.location.setValue(this.camp.location);
      this.campForm.date.setValue([new Date(this.camp.startDate), new Date(this.camp.endDate)]);
      this.campForm.description.setValue(this.camp.description);
      this.campForm.price.setValue(this.camp.price);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.imagePreview = this.camp.image;
      this.campForm.image.setValidators([]);
      this.campForm.image.updateValueAndValidity();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.imagesPreview = this.camp.images;
      this.campForm.addImages.setValidators([]);
      this.campForm.addImages.updateValueAndValidity();
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    const campFormData = new FormData();
    Object.keys(this.campForm).map(key => {
      if (key === 'addImages') {
        const files: any[] = this.campForm[key].value;
        Array.from(files).forEach(file => { campFormData.append('addImages', file) });
      } else {
        campFormData.append(key, this.campForm[key].value);
      }
      if (key === 'date') {
        campFormData.append('startDate', this.campForm[key].value[0]);
        campFormData.append('endDate', this.campForm[key].value[1]);
      }
    });
    this.removeImages.forEach(image => { campFormData.append('removeImages', image) });

    if (this.editMode) {
      this._editCamp(campFormData);
    } else {
      this._createCamp(campFormData);
    }
  }

  private _createCamp(campData: FormData) {
    this.eventsService.createEvent(campData).subscribe(res => {
        this.messageService.add({
          severity: 'success',
          summary: 'Erfolgreich',
          detail: 'Camp erstellt'
        });

        this.location.back();
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Fehler',
          detail: 'Fehler beim Erstellen des Camps'
        });
      });
  }

  private _editCamp(campData: FormData) {
    this.eventsService.editEvent(campData, `${this.camp.id}`).subscribe(res => {
        this.messageService.add({
          severity: 'success',
          summary: 'Erfolgreich',
          detail: 'Camp gespeichert'
        });

        this.location.back();
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Fehler',
          detail: 'Fehler beim Speichern des Camps'
        });
      });
  }

  onCancel() {
    this.location.back();
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ image: file });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.form.get('image').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imagePreview = fileReader.result;
      }
      fileReader.readAsDataURL(file);
    }
  }

  onImagesUpload(event: any) {
    const files = event.target.files;
    if (files) {
      this.form.patchValue({ addImages: files });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.form.get('addImages').updateValueAndValidity();
      for (const file of files) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          this.imagesPreview.push(fileReader.result);
        }
        fileReader.readAsDataURL(file);
      }
    }
  }

  removeImage(image: string) {
    this.removeImages.push(image);
    this.imagesPreview = this.imagesPreview.filter(i => i !== image );
  }

  get campForm() {
    return this.form.controls;
  }
}
