import { ServicesEmployee } from './servicesEmployee';

export class ServicesActivity {
  id: number;
  externalId: string;
  date: Date;
  from: Date;
  to: Date;
  durationMins: number;
  durationHrs: number;
  review: boolean;
  billable: boolean;
  employee: ServicesEmployee;
  type: string;
  task: string;
  ticketSystem: string;
  ticketNumber: string;
  project: string;
  client: string;
  costCenter: string;
  comment: string;
}
