export class User {
 /*  id?: string; // ID-Feld hinzufügen */
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any){
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

      // Hilfsfunktion, um das Modell als JSON für Firestore zu speichern
      
  toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city
    };
  }
}