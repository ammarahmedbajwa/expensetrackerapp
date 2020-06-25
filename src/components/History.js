 import React, {useContext} from 'react'
 import {GlobalContext} from '../context/Globalstate';
 import { Transaction } from './Transaction';
 
 export const History = () => {

    const {transactions} = useContext(GlobalContext);
    
    

    
     return (
         
         <div>
             <h3>History</h3>
             
             <ul className = "list">
                    {transactions.map(transactions => (<Transaction key = {transactions.id} transactions = {transactions} />))}
                 
             </ul>
         </div>
     )
 }
 