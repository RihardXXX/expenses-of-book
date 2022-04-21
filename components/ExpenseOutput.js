import { View } from "react-native"
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

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

const ExpenseOutput = ({expenses, periodName}) => {
    return (
        <View>
            <ExpenseSummary 
                expenses={DUMMY_EXPENSES} 
                periodName={periodName} 
            />
            <ExpenseList expenses={DUMMY_EXPENSES} />
        </View>
    )
};

export default ExpenseOutput;