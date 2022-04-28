import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Input from "./Input";
import colors from "../../constants/colors";
import Button from "./Button";

const Form = ({isEdit, addEditHandler, cancelHandler}) => {
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handlerSubmit = () => {
        const data = {
            amount: +amount,
            date: new Date(date),
            description,
        };
        addEditHandler(data);
    }

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
                        onChangeText: e => setAmount(e),
                        value: amount, 
                    }}
                />
                <Input 
                    style={styles.rowInput}
                    label={'date'}
                    textInputConfig={{
                        maxLength: 10,
                        keyboardType: 'default',
                        placeholder: 'YYYY-MM-DD',
                        onChangeText: e => setDate(e),
                        value: date
                    }}
                />
            </View>
            <Input 
                label={'description'}
                textInputConfig={{
                    multiline: true,
                    maxLength: 300,
                    onChangeText: e => setDescription(e),
                    value: description
                }}
            />
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
    }
})