import { View, Text, StyleSheet } from "react-native"
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import colors from "../constants/colors";

const ExpenseOutput = ({expenses, periodName}) => {

    let content = <Text style={styles.notList}>Not expenses</Text>

    if (expenses.length) {
      content = <ExpenseList expenses={expenses} />; 
    }

    return (
        <View style={styles.container}>
            <ExpenseSummary 
                expenses={expenses} 
                periodName={periodName} 
            />
            { content }
        </View>
    )
};

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary50,
  },
  notList: {
    marginTop: '50%',
    fontSize: 28,
    textAlign: 'center',
    justifyContent: "center",
    color: colors.gray700,
    fontWeight: 'bold'
  }
})