import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import colors from "../../constants/colors";

const Form = () => {

    const amountHandler = () => {

    };

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
                        onChangeText: () => amountHandler() 
                    }}
                />
                <Input 
                    style={styles.rowInput}
                    label={'date'}
                    textInputConfig={{
                        maxLength: 10,
                        keyboardType: 'default',
                        placeholder: 'YYYY-MM-DD',
                        onChangeText: () => {}
                    }}
                />
            </View>
            <Input 
                label={'description'}
                textInputConfig={{
                    multiline: true,
                    maxLength: 300,
                }}
            />
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
})