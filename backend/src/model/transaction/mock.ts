import {Transaction} from "./transaction";
import BusinessEntity from "./bentity";

const owner = new BusinessEntity("1", "David Saputra")

export const data = [
    new Transaction("USD", 100000, owner, new BusinessEntity("2", "Counter Party 1"), "Remark 1"),
    new Transaction("USD", 200000, owner, new BusinessEntity("3", "Counter Party 2"), "Remark 2"),
    new Transaction("USD", 300000, owner, new BusinessEntity("4", "Counter Party 3"), "Remark 3"),
    new Transaction("USD", 400000, owner, new BusinessEntity("5", "Counter Party 4"), "Remark 4"),
    new Transaction("USD", 500000, owner, new BusinessEntity("6", "Counter Party 5"), "Remark 5"),
    new Transaction("USD", 600000, owner, new BusinessEntity("7", "Counter Party 6"), "Remark 6"),
    new Transaction("USD", 700000, owner, new BusinessEntity("8", "Counter Party 7"), "Remark 7"),
    new Transaction("USD", 800000, owner, new BusinessEntity("9", "Counter Party 8"), "Remark 8"),
    new Transaction("USD", 900000, owner, new BusinessEntity("10", "Counter Party 9"), "Remark 9"),
    new Transaction("USD", 1000000, owner, new BusinessEntity("11", "Counter Party 10"), "Remark 10"),
    new Transaction("USD", 1100000, owner, new BusinessEntity("12", "Counter Party 11"), "Remark 11"),
    new Transaction("USD", 1200000, owner, new BusinessEntity("2", "Counter Party 1"), "Remark 1"),
    new Transaction("USD", 1300000, owner, new BusinessEntity("3", "Counter Party 2"), "Remark 2"),
    new Transaction("USD", 1400000, owner, new BusinessEntity("4", "Counter Party 3"), "Remark 3"),
    new Transaction("USD", 1500000, owner, new BusinessEntity("5", "Counter Party 4"), "Remark 4"),
    new Transaction("USD", 1600000, owner, new BusinessEntity("6", "Counter Party 5"), "Remark 5"),
    new Transaction("USD", 1700000, owner, new BusinessEntity("7", "Counter Party 6"), "Remark 6"),
    new Transaction("USD", 1800000, owner, new BusinessEntity("8", "Counter Party 7"), "Remark 7"),
    new Transaction("USD", 1900000, owner, new BusinessEntity("9", "Counter Party 8"), "Remark 8"),
    new Transaction("USD", 2000000, owner, new BusinessEntity("10", "Counter Party 9"), "Remark 9"),
    new Transaction("USD", 2100000, owner, new BusinessEntity("11", "Counter Party 10"), "Remark 10"),
    new Transaction("USD", 2200000, owner, new BusinessEntity("12", "Counter Party 11"), "Remark 11"),
];
