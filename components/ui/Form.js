import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Input from "./Input";
import colors from "../../constants/colors";
import Button from "./Button";

const Form = ({isEdit, addEditHandler, cancelHandler, defaultValues}) => {
    const [amount, setAmount] = useState(() => {
        return defaultValues 
            ? { value: defaultValues.amount.toString(), isValid: true }  
            : { value: '', isValid: true };
    });
    const [date, setDate] = useState(() => {
        return defaultValues 
            ? { value: defaultValues.date.toISOString().slice(0, 10), isValid: true }
            : { value: '', isValid: true };
    });
    const [description, setDescription] = useState(() => {
        return defaultValues 
            ? { value: defaultValues.description, isValid: true }
            : { value: '', isValid: true };
    });
    const [error, setError] = useState(false);

    const callBackStatus = status => data => ({ ...data, isValid: status })

    const resetInputsIsValids = () => {
        setAmount(callBackStatus(true));
        setDate(callBackStatus(true));
        setDescription(callBackStatus(true));
    };

    const handlerSubmit = () => {
        const data = {
            amount: +amount.value,
            date: new Date(date.value),
            description: description.value,
        };

        const amountIsValid = !isNaN(data.amount) && data.amount > 0;
        const dateIsValid = data.date.toString() !== 'Invalid Date';
        const descriptionIsValid = !!data.description.trim().length;

        resetInputsIsValids();

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Alert.alert('valid error', 'please input correct data');
            !amountIsValid && setAmount(callBackStatus(false));
            !dateIsValid && setDate(callBackStatus(false));
            !descriptionIsValid && setDescription(callBackStatus(false));

            setError(true);
            return;
        }

        resetInputsIsValids();

        setError(false);
        addEditHandler(data);
    }

    console.log('amount: ', amount);
    console.log('date: ', date);
    console.log('description: ', description);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Expenses 
            </Text>
            <View style={styles.upSection}>
                <Input 
                    style={styles.rowInput}
                    label={'amount'}
                    textInputConfig={{
                        maxLength: 6,
                        keyboardType: 'number-pad',
                        onChangeText: e => setAmount(oldAmount =>  ({ ...oldAmount, value: e })),
                        value: amount.value,
                        isValid: amount.isValid 
                    }}
                />
                <Input 
                    style={styles.rowInput}
                    label={'date'}
                    textInputConfig={{
                        maxLength: 10,
                        keyboardType: 'default',
                        placeholder: 'YYYY-MM-DD',
                        onChangeText: e => setDate(oldDate => ({ ...oldDate, value: e })),
                        value: date.value,
                        isValid: date.isValid
                    }}
                />
            </View>
            <Input 
                label={'description'}
                textInputConfig={{
                    multiline: true,
                    maxLength: 300,
                    onChangeText: e => setDescription(oldDescription => ({ ...oldDescription, value: e })),
                    value: description.value,
                    isValid: description.isValid
                }}
            />
            {
                error && <Text style={styles.errorText}>You input invalid form, please correct form</Text>
            }
            <View style={styles.buttonsSection}>
                <Button mode={'flat'} onPress={cancelHandler}>
                    cancel
                </Button>
                <Button onPress={handlerSubmit}>
                    {
                        isEdit ? 'edit' : 'add'
                    }
                </Button>
            </View>
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    upSection: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },  
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.primary800,
        textAlign: 'center'
    },
    rowInput: {
        flex: 1,
    },
    buttonsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    errorText: {
        fontSize: 20,
        color: 'tomato',
        textAlign: 'center'
    }
})