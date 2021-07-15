import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sponsor, SponsorsService } from '@dbl-dev/sponsors';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'flpa-sponsors-form',
  templateUrl: './sponsors-form.component.html',
  styleUrls: ['./sponsors-form.component.scss']
})
export class SponsorsFormComponent implements OnInit {

  form: FormGroup;
  isSubmitted = false;
  editMode = false;
  sponsor: Sponsor;
  imagePreview: string | ArrayBuffer | null;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private sponsorsService: SponsorsService, private messageService: MessageService, private location: Location) {
  }

  ngOnInit(): void {
    this._initForm();
    this._checkEditMode();
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      url: [''],
      image: ['']
    });
  }

  private _checkEditMode() {
    this.route.params.subscribe(params => {
      if (params.sponsorId) {
        this.editMode = true;
        this._getSponsor(params.sponsorId);
      }
    });
  }

  private _getSponsor(sponsorId: string) {
    this.sponsorsService.getSponsor(sponsorId).subscribe(res => {
      this.sponsor = res;

      this.sponsorForm.name.setValue(this.sponsor.name);
      this.sponsorForm.url.setValue(this.sponsor.url);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.imagePreview = this.sponsor.image;
      this.sponsorForm.image.setValidators([]);
      this.sponsorForm.image.updateValueAndValidity();
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    const sponsorFormData = new FormData();
    Object.keys(this.sponsorForm).map(key => {
      sponsorFormData.append(key, this.sponsorForm[key].value);
    });

    if (this.editMode) {
      this._editSponsor(sponsorFormData);
    } else {
      this._createSponsor(sponsorFormData);
    }
  }

  private _createSponsor(sponsorData: FormData) {
    this.sponsorsService.createSponsor(sponsorData).subscribe(res => {
        this.messageService.add({
          severity: 'success',
          summary: 'Erfolgreich',
          detail: 'Sponsor erstellt'
        });

        this.location.back();
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Fehler',
          detail: 'Fehler beim Erstellen des Sponsors'
        });
      });
  }

  private _editSponsor(sponsorData: FormData) {
    console.log(sponsorData.get('image'));
    this.sponsorsService.editSponsor(sponsorData, `${this.sponsor.id}`).subscribe(res => {
        this.messageService.add({
          severity: 'success',
          summary: 'Erfolgreich',
          detail: 'Sponsor gespeichert'
        });

        this.location.back();
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Fehler',
          detail: 'Fehler beim Speichern des Sponsors'
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

  get sponsorForm() {
    return this.form.controls;
  }
}
