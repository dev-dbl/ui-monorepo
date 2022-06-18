import { ServicesActivity } from './servicesActivity';

export class ServicesStatistic {
  employee: string;
  totalActivities: ServicesActivity[];
  total: number;
  billableActivities: ServicesActivity[];
  billable: number;
  supportActivities: ServicesActivity[];
  support: number;
  meetingActivities: ServicesActivity[];
  meeting: number;
  trainingActivities: ServicesActivity[];
  training: number;
  salesDACHActivities: ServicesActivity[];
  salesDACH: number;
  salesNonDACHActivities: ServicesActivity[];
  salesNonDACH: number;
  partnerActivities: ServicesActivity[];
  partner: number;
  salesActivities: ServicesActivity[];
  sales: number;
  partnerTrainingActivities: ServicesActivity[];
  partnerTraining: number;
  developmentActivities: ServicesActivity[];
  development: number;
  otherActivities: ServicesActivity[];
  other: number;
  anomalies: ServicesActivity[];
}
