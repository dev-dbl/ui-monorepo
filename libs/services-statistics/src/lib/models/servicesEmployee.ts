export class ServicesEmployee {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  superior: ServicesEmployee;
  employees: ServicesEmployee[];

  getFullName() {
    return this.lastName + ' ' + this.firstName;
  }
}
