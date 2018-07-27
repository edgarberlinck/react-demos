import { FETCH_WEATHER } from "../actions";

export default function (state = [], action) {
    /**
     * Como o redux-promise foi instalado no projeto eu não preciso me preocupar
     * em resolver a promise.
     * 
     * O redux-promise é um middlewware que resolver as promises antes de enviar
     * a ação. Ele para a ação e só libera após a promise resolver.
     */
    switch (action.type) {
        /**
         * Cuidado!
         * 
         * Ao retornar o state não devemos nunca mudar o state diretamente
         * (state.push(blablabla)) e sim retornar uma nova instância do 
         * state. 
         * 
         * Lembre-se que não é possível manipular o state diretamente
         * sem usar o setState no react. O redux funciona da mesma forma.
         */
        case FETCH_WEATHER: return [action.payload.data, ...state];
    }

    return state;
}