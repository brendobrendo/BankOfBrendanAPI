import { State } from './PhysicalAddress';

export class MailingAddress {
    public street: string;
    public city: string;
    public state: State;
    public postalCode: string;
    
    constructor(street: string, city: string, state: State, postalCode: string) {
        if (this.isValidPostalCode(postalCode)) {
            throw new Error("Zip code not correct. Enter in ZZZZZ or ZZZZZ-ZZZZ format.")
        }
        
        this.street = street;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
    }

    private isValidPostalCode(postalCode: string): boolean {
        const zipCodePattern = /^\d{5}(-\d{4})?$/;
        return zipCodePattern.test(postalCode);
    }
}