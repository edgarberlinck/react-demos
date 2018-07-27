export function selectBook (book) {
    // selectBook é um ActionCreator, ele precisa retornar uma Action,
    // objeto com uma propriedade type
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}