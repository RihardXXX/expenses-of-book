import { View, Text } from "react-native";

const ExpenseSummary = ({periodName, expenses}) => {

    const expensesSum = expenses.reduce((acc, current) => acc + current.amount, 0)

    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${expensesSum.toFixed(2)}</Text>
        </View>
    )
};

export default ExpenseSummary;