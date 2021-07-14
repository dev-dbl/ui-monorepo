export class Event {
  id : string;
  name : string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  image?: string;
  status: string;
  price: number;
  maxParticipants?: number;
}
