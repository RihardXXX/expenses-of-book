import { useLayoutEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/ui/IconButton";
import colors from "../constants/colors";
import Button from "../components/ui/Button";
import { ExpenseContext } from '../store/expense-context';


const ManageExpenses = ({route, navigation}) => {

    const expenseId = route.params?.expenseId;
    const isEdit = Boolean(expenseId);

    const { addExpense, deleteExpense, updateExpense } = useContext(ExpenseContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdit ? 'Edit expense' : 'Add expense',
            headerStyle: { backgroundColor: colors.primary100 },
            headerTintColor: colors.primary800
        })
    }, [navigation, isEdit])

    const cancelHandler = () => navigation.goBack();

    const addEditHandler = () => {
        if (isEdit) {
            updateExpense(expenseId, {
                id: new Date().toISOString(),
                description: 'Test1',
                amount: 1111,
                date: new Date('2022-06-25')
              })
        } else {
            addExpense({
                id: new Date().toISOString(),
                description: 'Test',
                amount: 20.59,
                date: new Date('2022-06-24')
              })
        }
        navigation.goBack()
    };
    
    const removeExpense = () => {
        deleteExpense(expenseId);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonsSection}>
                <Button mode={'flat'} onPress={cancelHandler}>
                    cancel
                </Button>
                <Button onPress={addEditHandler}>
                    {
                        isEdit ? 'edit' : 'add'
                    }
                </Button>
            </View>
            {
                isEdit && (
                    <View style={styles.deleteContainer}>
                        <IconButton 
                            name={'trash'} 
                            size={34} 
                            color={colors.error500} 
                            onPress={removeExpense} 
                        />
                    </View>
                )
            }
        </View>
    )
};

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.primary50
    },
    deleteContainer: {
        borderTopColor: colors.gray700,
        borderTopWidth: 2,
        alignItems: 'center'
    },
    buttonsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    }
})