import { PhysicalAddress } from './PhysicalAddress';
import { MailingAddress } from './MailingAddress';

export class Customer {
    public firstName: string;
    public middleName?: string;
    public lastName: string;
    public physicalAddress: PhysicalAddress;
    public mailingAddress?: MailingAddress;
    public dateOfBirth: Date;

    constructor(
        firstName: string,
        lastName: string,
        physicalAddress: PhysicalAddress,
        dateOfBirth: Date,
        middleName?: string,
        mailingAddress?: MailingAddress
    ) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.physicalAddress = physicalAddress;
        this.mailingAddress = mailingAddress;
        this.dateOfBirth = dateOfBirth;
    }
}