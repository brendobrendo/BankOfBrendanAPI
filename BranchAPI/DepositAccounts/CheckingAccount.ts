import { Customer } from '../Customers/Customer';
import { DepositAccountRelationship } from '../AccountRelationships/DepositAccountRelationship';
import { DepositAccount, Status } from './DepositAccount';

export class CheckingAccount extends DepositAccount {
    protected overdraftLimit: number;

    constructor(
        accountNumber: string,
        primaryOwner: Customer,
        openDate: Date,
        status: Status,
        accountRelationships: DepositAccountRelationship[],
        balance: number=0,
        overdraftLimit: number=500,
    ) {
        super(
            accountNumber,
            primaryOwner,
            openDate,
            balance,
            status,
            accountRelationships
        );
        this.overdraftLimit = overdraftLimit;
    }
}