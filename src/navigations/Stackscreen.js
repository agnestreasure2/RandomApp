import React, {useState, useEffect} from "react";
import { Header, createStackNavigator } from "@react-navigation/stack";
import firebase from '../../config';
import Login from "../screens/Login";
import Registration from "../screens/Registration";
import Dashboard from "../screens/Dashboard";


const Stack = createStackNavigator();
const Stackscreen = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthChanged(user){
        setUser(user);
        if(initializing) setInitializing(false)
    }
    useEffect(() => {
        const subscriber = firebase.auth.onAuthChanged(onAuthChanged);
        return subscriber
    }, []);
    if(initializing) return null;

    if(!user){
        return(
            <Stack.Navigator>
                <Stack.Screen 
                name='Login'
                 component={Login} 
                 options={{
                    headerTitle: () => <Header name='Agnes Agbo' />,
                    headerStyle: {
                        height: 150,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: '#00e4d0',
                        shadowColor: '#000',
                        elevation: 25,
                    }
                 }}
                 />
                   <Stack.Screen 
                name='Registration'
                 component={Registration} 
                 options={{
                    headerTitle: () => <Header name='Agnes Agbo' />,
                    headerStyle: {
                        height: 150,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: '#00e4d0',
                        shadowColor: '#000',
                        elevation: 25,
                    }
                 }}
                 />
            </Stack.Navigator>
        );
    }
    return (
        <Stack.Navigator>
              <Stack.Screen 
                name='Dashboard'
                 component={Dashboard} 
                 options={{
                    headerTitle: () => <Header name='Dashboard' />,
                    headerStyle: {
                        height: 150,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: '#00e4d0',
                        shadowColor: '#000',
                        elevation: 25,
                    }
                 }}
                 />
        </Stack.Navigator>
    );
};

export default Stackscreen;