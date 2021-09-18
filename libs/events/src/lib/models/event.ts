import { EventRegistration } from './eventRegistration';

export class Event {
  id : string;
  name : string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  image?: string;
  images?: string[];
  status: string;
  price: number;
  maxParticipants?: number;
  eventRegistrations?: EventRegistration[]
}
