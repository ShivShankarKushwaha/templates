import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { fetchHome } from "../Actions/HomeAction";

export default function Screen1()
{
    const navigation = useNavigation();
    useEffect(() => {
       fetchHome()
       .then(res => console.log(res.data.data))
       .catch(err => console.log(err))
    },[])
    return(<View>
        {/* <Text className=" h-40 text-red-950 dark:bg-green-600">Screen1</Text> */}
        <Text style={{color:"red"}}>Screen1</Text>
        <Button title="Screen2" onPress={() => navigation.navigate("Screen2")} color="#841584"></Button>
    </View>)
}