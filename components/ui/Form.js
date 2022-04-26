import { View } from "react-native";
import Input from "./Input";

const Form = () => {

    const amountHandler = () => {

    };

    return (
        <View>
            <Input 
                label={'amount'}
                textInputConfig={{
                    maxLength: 6,
                    keyboardType: 'number-pad',
                    onChangeText: () => amountHandler() 
                }}
            />
            <Input 
                label={'date'}
                textInputConfig={{
                    maxLength: 10,
                    keyboardType: 'default',
                    placeholder: 'YYYY-MM-DD',
                    onChangeText: () => {}
                }}
            />
            <Input 
                label={'description'}
                textInputConfig={{
                    multiline: true
                }}
            />
        </View>
    );
};

export default Form;