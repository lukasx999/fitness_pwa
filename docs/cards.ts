// https://tekeye.uk/playing_cards/svg-playing-cards

export enum CardKind {
    Clubs,
    Diamonds,
    Spades,
    Hearts
}

export enum CardType {
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King
}

export interface Card {
    kind: CardKind,
    type: CardType,
    isCovered: boolean,
}

export function getDeck(): Card[] {
    return [
        { kind: CardKind.Spades,   type: CardType.Ace, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Ace, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Ace, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Ace, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Two, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Two, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Two, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Two, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Three, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Three, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Three, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Three, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Four, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Four, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Four, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Four, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Five, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Five, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Five, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Five, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Six, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Six, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Six, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Six, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Seven, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Seven, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Seven, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Seven, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Eight, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Eight, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Eight, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Eight, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Nine, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Nine, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Nine, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Nine, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Ten, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Ten, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Ten, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Ten, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Jack, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Jack, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Jack, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Jack, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.Queen, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.Queen, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.Queen, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.Queen, isCovered: false },

        { kind: CardKind.Spades,   type: CardType.King, isCovered: false },
        { kind: CardKind.Hearts,   type: CardType.King, isCovered: false },
        { kind: CardKind.Diamonds, type: CardType.King, isCovered: false },
        { kind: CardKind.Clubs,    type: CardType.King, isCovered: false },
    ];
}
