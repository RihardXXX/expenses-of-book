import { FlatList, Text } from "react-native";

const ExpenseList = ({expenses}) => {

    const renderItem = ({item}) => 
        <Text>
            { 
                item.description 
            }
        </Text>

    return (
        <FlatList 
            data={expenses}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
};

export default ExpenseList;