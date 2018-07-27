// O argumento state nao é o state da aplicação,
// é apenas o state que este reducer é responsável
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED': return action.payload;
    }
    return state;
}