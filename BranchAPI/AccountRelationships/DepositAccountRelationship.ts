import { Customer } from "../Customers/Customer";
import { SavingsAccount } from "../DepositAccounts/SavingsAccount";
import { DepositAccount } from "../DepositAccounts/DepositAccount";
import { CheckingAccount } from "../DepositAccounts/CheckingAccount";
import { CDAccount } from "../DepositAccounts/CDAccount";

enum Type {
    SoleOwner = "Sole Owner",
    PrimaryJointOwner = "Primary Joint Owner",
    SecondaryJointOwner = "Secondary Joint Owner",
    Minor = "Minor",
    PowerofAttorney = "Power of Attorney",
    Custodian = "Custodian"
}

export class DepositAccountRelationship {
    public type: Type;
    public customer: Customer;
    public account: DepositAccount | CheckingAccount | SavingsAccount | CDAccount;
}