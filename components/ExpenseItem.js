import { Pressable, View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import { getFormattedDate } from "../utils/date";
import { useNavigation } from "@react-navigation/native";


const ExpenseItem = ({id, description, date, amount}) => {

    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate('ManageExpenses', {
            expenseId: id
        });
    };

    return (
        <Pressable 
            style={({pressed}) => pressed && styles.pressed}
            onPress={onPressHandler}
        >
            <View style={styles.rootContainer}>
                <View>
                    <Text style={styles.textDescription}>
                        {
                            description
                        }
                    </Text>
                    <Text>
                        {
                            getFormattedDate(date)
                        }
                    </Text>
                </View>
                <View style={styles.amountSection}>
                    <Text style={styles.textAmount}>
                        {
                            amount.toFixed(2)
                        }
                    </Text>
                </View>
            </View>
        </Pressable>
    )
};

export default ExpenseItem;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginVertical: 5,
        backgroundColor: colors.primary100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.5,
    },  
    amountSection: {
        borderWidth: 1,
        borderColor: 'purple',
        padding: 5,
        backgroundColor: colors.primary200,
        borderRadius: 3,
        minWidth: 90,
    },
    textDescription: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    textAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center"
    }
});