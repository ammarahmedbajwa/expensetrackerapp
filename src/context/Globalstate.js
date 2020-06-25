import React, { createContext, useReducer } from 'react';
import Appreducer from './Appreducer';

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Appreducer, initialState);

    function addTransaction(transactions){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transactions
        });

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
    }}> 
        {children}
    </GlobalContext.Provider>);

}

}
