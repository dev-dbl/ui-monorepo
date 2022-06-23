import { ServicesActivity } from './servicesActivity';

export class ServicesAnomaly {
  type: ServicesAnomalyType;
  activities: ServicesActivity[];
}

export enum ServicesAnomalyType {
  REVIEW,
  PARTNER,
  OTHER,
  BILLED_SUPPORT,
  BILLABLE_SUPPORT,
  UNBOOKED_DAY
}
