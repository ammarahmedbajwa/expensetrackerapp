export default (state, action) => {
    switch (action.type){
        default:
            return(state);

    case 'ADD_TRANSACTION':
        return{
            ...state,
            transactions: [action.payload, ...state.transactions]
        }
    }
}