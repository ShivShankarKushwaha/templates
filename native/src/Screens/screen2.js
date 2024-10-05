import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { postHome } from "../Actions/HomeAction";


export default function Screen2()
{
    const navigation = useNavigation();
    useEffect(() => {
        let t = [{name:'Shiv',email:'shiv@test.com'}]
        postHome({t})
        .then(res => console.log(res.data.data.message))
        .catch(err => console.log(err))
    },[])
    return(<View>
        <Text style={{color:"red"}}>Screen2</Text>
        <Button title="Screen1" onPress={() => navigation.navigate("Screen1")} color="#841584"></Button>
    </View>)
}