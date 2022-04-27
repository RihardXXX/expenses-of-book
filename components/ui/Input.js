import { View, Text, TextInput, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const Input = ({label, textInputConfig, style}) => {

    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.multiline);
    }

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>
                { label }
            </Text>
            <TextInput 
                {...textInputConfig} 
                style={inputStyles}
            />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 15,
    },
    label: {
        fontSize: 14,
        color: colors.primary700,
        marginBottom: 5
    },
    input: {
        fontSize: 18,
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 3,
        color: colors.primary700,
    },
    multiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});