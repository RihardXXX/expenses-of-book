import { View, StyleSheet, Pressable, Text } from "react-native";
import colors from "../../constants/colors";

const Button = ({children, style, onPress, mode}) => {
    return (
        <View style={style}>
            <Pressable 
                onPress={onPress} 
                style={({pressed}) => pressed && styles.pressed}
            >
                <View style={[styles.button, mode === 'flat' && [styles.flat]]}>
                    <Text style={styles.text}>
                        {
                            children
                        }
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: colors.primary200,
        borderRadius: 4,
        minWidth: 120,
    },
    text: {
        fontSize: 22,
        textAlign: 'center',
        color: colors.gray700,
    },
    pressed: {
        opacity: .5,
    },
    flat: {
        backgroundColor: 'transparent'
    }
})