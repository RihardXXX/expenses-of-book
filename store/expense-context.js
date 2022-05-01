import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2021-12-19')
    },
    {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 89.29,
      date: new Date('2022-01-05')
    },
    {
      id: 'e3',
      description: 'Some bananas',
      amount: 5.99,
      date: new Date('2021-12-01')
    },
    {
      id: 'e4',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19')
    },
    {
      id: 'e5',
      description: 'Another book',
      amount: 18.59,
      date: new Date('2022-02-18')
    }
  ];

const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    updateExpense: (id, {description, amount, date}) => {},
    deleteExpense: (id) => {}
});


const expenseReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'UPDATE':
            const { id, expense } = action.payload;
            return state.map(item => item.id === id ? { id, ...expense} : item)
        case 'DELETE':
            return state.filter(item => item.id !== action.payload);
        default: 
            return state;    
    }
}


const ExpenseProvider = ({children}) => {

    const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

    const addExpense = (expense) => {
        dispatch({type: 'ADD', payload: expense});
    }

    const updateExpense = (id, expense) => {
        dispatch({type: 'UPDATE', payload: { id: id, expense: expense }})
    }

    const deleteExpense = (id) => {
        dispatch({type: 'DELETE', payload: id })
    }

    const value = {
        expenses: expenseState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    };

    return (
        <ExpenseContext.Provider value={value}>
            {
                children
            }
        </ExpenseContext.Provider>
    )
};


export {
    ExpenseContext,
    ExpenseProvider
};