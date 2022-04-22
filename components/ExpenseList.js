import { FlatList, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({expenses}) => {
    // console.log(112, expenses);

    const renderItem = ({item}) => <ExpenseItem {...item} />

    return (
        <FlatList 
            style={styles.container}
            data={expenses}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
};

export default ExpenseList;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    }
})