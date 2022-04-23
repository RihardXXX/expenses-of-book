import { Pressable, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const IconButton = ({name, size, color, style, onPress}) => {
    return (
        <Pressable
            style={({pressed}) => pressed && styles.pressed}
            onPress={onPress}
        >
            <View style={[styles.buttonContainer, style]}>
                <Ionicons 
                    name={name}
                    size={size}
                    color={color}
                />
            </View>
        </Pressable>
    )
};

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 5,
        marginHorizontal: 10,
        marginVertical: 2
    },
    pressed: {
        opacity: .5,
    }
})