

export default class Deck {

    constructor(config) {
        this.obj = config
    }

    getObject() {
        return this.obj
    }

    getCards() {
        return this.obj.cards
    }

    shuffle() {
        const initial_Cards = JSON.stringify(this.obj.cards)

        this.obj.cards = this.obj.cards.sort(() => 0.5 - Math.random());
        if (initial_Cards !== JSON.stringify(this.obj.cards))
            return true
        else
            return false
    }

    insertAt(mixedCards, position) {

        if (this.obj.cards[position] !== undefined) {
            for (let i = this.obj.cards.length; i > position; --i) {
                this.obj.cards[i] = this.obj.cards[i - 1]
            }
            this.obj.cards[position] = mixedCards
            return true
        }

        else {
            this.obj.cards.push(mixedCards)
            return true
        }

    }

    draw() {
        const card = this.obj.cards.shift()
        if (card === undefined)
            return false
        else
            return card
    }

    getCardsCount() {
        return this.obj.cards.length
    }
}