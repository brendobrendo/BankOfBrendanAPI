export enum State {
    AL = "AL",
    AK = "AK",
    AZ = "AZ",
    AR = "AR",
    CA = "CA",
    CO = "CO",
    CT = "CT",
    DE = "DE",
    FL = "FL",
    GA = "GA",
    HI = "HI",
    ID = "ID",
    IL = "IL",
    IN = "IN",
    IA = "IA",
    KS = "KS",
    KY = "KY",
    LA = "LA",
    ME = "ME",
    MD = "MD",
    MA = "MA",
    MI = "MI",
    MN = "MN",
    MS = "MS",
    MO = "MO",
    MT = "MT",
    NE = "NE",
    NV = "NV",
    NH = "NH",
    NJ = "NJ",
    NM = "NM",
    NY = "NY",
    NC = "NC",
    ND = "ND",
    OH = "OH",
    OK = "OK",
    OR = "OR",
    PA = "PA",
    RI = "RI",
    SC = "SC",
    SD = "SD",
    TN = "TN",
    TX = "TX",
    UT = "UT",
    VT = "VT",
    VA = "VA",
    WA = "WA",
    WV = "WV",
    WI = "WI",
    WY = "WY"
}

export class PhysicalAddress {
    public street: string;
    public city: string;
    public state: State;
    public postalCode: string;

    constructor(street: string, city: string, state: State, postalCode: string) {
        if (this.isPOBox(street)) {
            throw new Error("Physical address cannot be a PO Box.");
        }

        if (this.isValidPostalCode(postalCode)) {
            throw new Error("Zip code not correct. Enter in ZZZZZ or ZZZZZ-ZZZZ format.")
        }

        this.street = street;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
    }

    private isPOBox(street: string): boolean {
        const poBoxPattern = /\b[P|p](OST|ost)?\.?\s*[O|o|0](ffice)?\.?\s*B(ox)?\.?\b/g;
        return poBoxPattern.test(street);
    }

    private isValidPostalCode(postalCode: string): boolean {
        const zipCodePattern = /^\d{5}(-\d{4})?$/;
        return zipCodePattern.test(postalCode);
    }
}