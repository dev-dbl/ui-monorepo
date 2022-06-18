import { ServicesActivity } from './servicesActivity';

export class ServicesClient {
  name: string;
  totalHours: number;
  totalActivities: ServicesActivity[];
  billableHours: number;
  billableActivities: ServicesActivity[];
  supportHours: number;
  supportActivities: ServicesActivity[];
}
