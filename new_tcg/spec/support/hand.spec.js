import Hand from "../../src/models/hand"

const config = {
    cards: [1, 2, 3, 4, 5],
    // limit: 5
}
let hand = new Hand(config)

describe("get class hand", function () {
    it("add card", function () {
        expect(hand.addCard(5)).toBe(true);
    });
    it("remove card", function () {
        expect(hand.removeCard()).not.toBe(false);
    });
})
