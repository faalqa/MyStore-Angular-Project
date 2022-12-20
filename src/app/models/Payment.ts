export class Payment {
    id: number;
    name: string;
    address: string;
    cardNumber: string;
  
    constructor() {
        this.id = 0;
        this.name = '';
        this.address = '';
        this.cardNumber = '';
    }

    setID(id: number) {
        this.id = id;
    }

    setName(name: string) {
        this.name = name;
    }

    setAddress(address: string) {
        this.address = address;
    }

    setCardNumber(cardNumber: string) {
        this.cardNumber = cardNumber;
    }
}