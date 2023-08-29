import Deck from "../src/models/deck";

const config = {
    cards: [1,2,3,4,5]
};

let deck = new Deck(config)

describe("get class deck", function () {

    it("should be a object", function () {
        expect(typeof (deck.getObject())).toBe('object');
    });

    it("object has arr cards", function () {
        expect(deck.getObject().hasOwnProperty('cards')).toBe(true);
    });

    it("is shuffle", function () {
        expect(deck.shuffle()).toBe(true)
    });

    it("is insertAt", function () {
        expect(deck.insertAt(8 , 6)).toBe(true)
    });

    it("is draw", function () {
        expect(deck.draw()).not.toBe(undefined)
    });

    it("get number cards", function () {
        expect(deck.getCardsCount()).not.toBe(undefined)
    });
});