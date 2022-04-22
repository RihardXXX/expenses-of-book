import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const ExpenseSummary = ({periodName, expenses}) => {

    const expensesSum = expenses.reduce((acc, current) => acc + current.amount, 0)

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.total}>${expensesSum.toFixed(2)}</Text>
        </View>
    )
};

export default ExpenseSummary;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.primary200,
    },
    period: {
        fontSize: 20,
        fontStyle: 'italic',
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})