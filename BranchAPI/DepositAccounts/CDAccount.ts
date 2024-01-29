import { Customer } from '../Customers/Customer';
import { DepositAccountRelationship } from '../AccountRelationships/DepositAccountRelationship';

enum CDStatus {
    notGrace = "Not in grace",
    inGrace = "In grace",
    dormant = "Dormant",
    closed = "Closed"
}

export class CDAccount {
    public accountNumber: string;
    public primaryOwner: Customer;
    public term: number; // in months
    public balance: number;
    public status: CDStatus;
    public accountRelationships: DepositAccountRelationship[];
    private static interestRate: number = 0.048;
    
    constructor(
        accountNumber: string,
        primaryOwner: Customer,
        balance: number,
        status: CDStatus,
        accountRelationships: DepositAccountRelationship[] = []
    ) {
        // Validate account ID length and content
        if (accountNumber.length !== 10 || !/^[0-9]+$/.test(accountNumber)) {
            throw new Error("Account ID must be exactly 10 numeric characters long.");
        }

        this.accountNumber = accountNumber;
        this.primaryOwner = primaryOwner;
        this.balance = balance;
        this.status = status;
        this.accountRelationships = accountRelationships;
    }

    // add accrued interest to balance (every month)
    addAccruedInterest(): void {
        const monthlyInterestRate = CDAccount.interestRate / 12;
        this.balance += this.balance * monthlyInterestRate;
        console.log(`Interest added. New balance: ${this.balance.toFixed(2)}`)
    }

    // calculate early withdrawal penalty
        // if within seven days of opening/renewal the penalty
        // is 7 days simple interest on the amount withdrawn

        // otherwise it is 3 months of interest (compounded on a monthly basis)
        // on the amount withdrawn
    calculateEarlyWithdrawalPenalty(withdrawnAmount: number, daysSinceOpened: number): number {
        let penalty = 0;
        if (daysSinceOpened <= 7) {
            // 7 days simple interest
            penalty = withdrawnAmount * (CDAccount.interestRate / 365) * 7;
        } else {
            // 3 months of compounded interest
            const monthlyInterestRate = CDAccount.interestRate / 12;
            for (let i = 0; i < 3; i++) {
                penalty += withdrawnAmount * monthlyInterestRate;
                withdrawnAmount += penalty; // Compounding
            }
        }
        console.log(`Early withdrawal penalty: ${penalty.toFixed(2)}`);
        return penalty;
    }

    rollOver(newTerm: number): void {
        this.term = newTerm;
        // Reset the status or perform other necessary actions for rollowver
        console.log(`CD rolled over to new term of ${newTerm} months.`);
    }

    closeCD(): void {
        console.log(`CD account close. Balance of ${this.balance.toFixed(2)} disbursed.`);
        // Reset balance and update status
        this.balance = 0;
        this.status = CDStatus.closed;
    }
}