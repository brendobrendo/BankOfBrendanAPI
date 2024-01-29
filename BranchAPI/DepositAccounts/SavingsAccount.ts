import { Customer } from '../Customers/Customer';
import { DepositAccountRelationship } from '../AccountRelationships/DepositAccountRelationship';
import { DepositAccount, Status } from './DepositAccount';

export class SavingsAccount extends DepositAccount {
    private static interestRate?: number;
    protected overdraftLimit: number;

    constructor(
        accountNumber: string,
        primaryOwner: Customer,
        balance: number=0,
        openDate: Date,
        overdraftLimit: number=500,
        status: Status,
        accountRelationships: DepositAccountRelationship[]
    ) {
        super(
            accountNumber,
            primaryOwner,
            openDate, 
            balance,
            status,
            accountRelationships);
        this.overdraftLimit = overdraftLimit;
    }

    async fetchInterestRate(): Promise<void> {
        if (!SavingsAccount.interestRate) {
            try {
                const response = await fetch('https://api.yourbank.com/interestRate');
                const data = await response.json();
                SavingsAccount.interestRate = data.rate;
            } catch (error) {
                console.error("Error fetching interest rate:", error);
            }
        }
    }
}