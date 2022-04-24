import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/ui/IconButton";
import colors from "../constants/colors";
import Button from "../components/ui/Button";


const ManageExpenses = ({route, navigation}) => {

    const expenseId = route.params?.expenseId;
    const isEdit = Boolean(expenseId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdit ? 'Edit expense' : 'Add expense',
            headerStyle: { backgroundColor: colors.primary100 },
            headerTintColor: colors.primary800
        })
    }, [navigation, isEdit])

    const cancelHandler = () => navigation.goBack();
    const addEditHandler = () => console.log('add || edit handler');

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
                            onPress={() => console.log('remove expense')} 
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