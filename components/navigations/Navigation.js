import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TasbeehDetail from '../TasbeehDetail';
import Subhanallah from '../Subhanallah';
import Alhamdulillah from '../Alhamdulillah';
import Astaghfirullah from '../Astaghfirullah';






const Stack = createStackNavigator();


function Navigations() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={false} >
                <Stack.Screen options={{ headerShown: false }} name="TasbeehDetail" component={TasbeehDetail} />
                <Stack.Screen name="Subhanallah" component={Subhanallah} />
                <Stack.Screen name="Alhamdulillah" component={Alhamdulillah} />
                <Stack.Screen name="Astaghfirullah" component={Astaghfirullah} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigations;
