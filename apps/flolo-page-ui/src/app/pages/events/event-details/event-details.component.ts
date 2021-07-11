import { Component, OnInit } from '@angular/core';
import { Event } from '@dbl-dev/events';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'flpu-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  tempDesc = 'Wie angekündigt veranstalten wir  im September wieder ein Beachcamp in Mattsee und würden uns voll freuen, wenn ihr mit uns gemeinsam den Sommer ausklingen lassen wollt:)<br/>' +
    '<ul>' +
    '    <li>4 Courts direkt am See</li>' +
    '    <li>4 Trainer (Flo, Lo und 2 Überraschungscoaches)</li>' +
    '    <li>maximal 8 TeilnehmerInnen pro Gruppe</li>' +
    '    <li>2 x 2 Stunden Training pro Tag (insgesamt 6 Trainings) + freies Spiel dazwischen möglich</li>' +
    '    <li>Vorträge zu mentalen und technisch/taktischen Beachvolleyballthemen (für alle die es interessiert)</li>' +
    '    <li>Zusätzliche Beachfitnesseinheit (für alle die wollen)</li>' +
    '    <li>Getränke und Snacks</li>' +
    '    <li>Cooles Rahmenprogramm (+ Abendprogramm)</li>' +
    '  </ul>';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let eventId = '';
    this.route
      .queryParams
      .subscribe((params: any) => {
        eventId = params.eventId;
      });
    console.log(eventId);

    this.event = {
      name: 'Summerclosing',
      description: this.tempDesc,
      startDate: new Date('2021-09-24T00:00:00'),
      endDate: new Date('2021-09-26T23:59:59'),
      location: 'Strandbad Mattsee',
      status: 'Offen',
      price: 200.00,
      maxParticipants: 32
    };
  }

}
