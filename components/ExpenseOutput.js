import { View } from "react-native"
import ExpenseList from "./ExpenseList";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseOutput = ({expenses}) => {
    return (
        <View>
            <ExpenseSummary />
            <ExpenseList />
        </View>
    )
};

export default ExpenseOutput;