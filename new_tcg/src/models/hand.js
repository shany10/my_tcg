export default class Hand {


    constructor(config) {
        if (config.cards === undefined) {
            return
        }
        
        if(Number.isInteger(config.limit)) {
            this.limit = config.limit
        }
        else {
            this.limit = 7
        }
        this.cards = config.cards
    }

    getLimit() {
        return this.limit
    }

    addCard(card) {
        if (this.cards.length >= this.limit) {
            return false
        }
        this.cards.push(card)
        return true
    }

    removeCard(index) {
        if(Number.isInteger(index)) {
            if(this.cards[index] !== undefined) {
                const card = this.cards.splice(index , 1)
                return card   
            }
            return false
        }
        return false
    }

    getAllCards() {
        return this.cards
    }

    getCardsCount() {
        return this.cards.length
    }

}