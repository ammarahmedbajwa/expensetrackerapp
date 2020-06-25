export default (state, action) => {
    switch (action.type){
        default:
            return(state);

    case 'ADD_TRANSACTION':
        return{
            ...state,
            transactions: [action.payload, ...state.transactions]
        }

        case 'DELETE_TRANSACTION':
        return{
            ...state,
            transactions: state.transactions.filter(transactions => transactions.id !== transactions.payload)
        }

    }
}