import { Customer } from '../Customers/Customer';
import { DepositAccountRelationship } from '../AccountRelationships/DepositAccountRelationship';

export enum Status {
    Open = "Open",
    Closed = "Closed",
    Processing = "Processing",
    OnHold = "On Hold"
}

export class DepositAccount {
    public accountNumber: string;
    public primaryOwner: Customer;
    public openDate: Date; 
    public balance: number;
    public status: Status;
    public accountRelationships: DepositAccountRelationship[];

    constructor(
        accountNumber: string,
        primaryOwner: Customer,
        openDate: Date,
        balance: number = 0, // Default balance set to 0 for new accounts
        status: Status = Status.Open, // Default status set to Open
        accountRelationships: DepositAccountRelationship[] = [] // Default to an empty array if no relationships are provided
    ) {
        // Validate account ID length and content
        if (accountNumber.length !== 10 || !/^[0-9]+$/.test(accountNumber)) {
            throw new Error("Account ID must be exactly 10 numeric characters long.");
        }

        this.accountNumber = accountNumber;
        this.primaryOwner = primaryOwner;
        this.openDate = openDate;
        this.balance = balance;
        this.status = status;
        this.accountRelationships = accountRelationships;
    }

    // Method to deposit money into the account
    deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("Amount to be deposited should be positive.");
        }

        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }

    // Method to withdraw money from the account
    withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("Amount to be withdrawn should be positive.");
        }

        if (this.balance - amount < 0) {
            throw new Error("Insufficient funds for this withdrawal.");
        }

        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    }

    // Getter for the current balance
    getBalance(): number {
        return this.balance;
    }

    // Getter for the account status
    getStatus(): Status {
        return this.status;
    }

    // Method to close the account
    closeAccount(): void {
        if (this.balance > 0) {
            throw new Error("Please withdraw all funds before closing the account.");
        }

        this.status = Status.Closed;
        console.log("Your account has been successfully closed.");
    }
}

