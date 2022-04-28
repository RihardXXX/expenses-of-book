import { useLayoutEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/ui/IconButton";
import colors from "../constants/colors";
import { ExpenseContext } from '../store/expense-context';

import Form from "../components/ui/Form";


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

    const addEditHandler = (data) => {
        if (isEdit) {
            updateExpense(expenseId, data)
        } else {
            addExpense({
                id: new Date().toISOString(),
                ...data,
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
            <Form 
                isEdit={isEdit} 
                cancelHandler={cancelHandler}
                addEditHandler={addEditHandler}
            />
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
    }
})