import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';

const MainStack = createStackNavigator();

const RootNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  <NavigationContainer>
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <MainStack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          animationTypeForReplace: 'pop',
          headerStyle: {
            backgroundColor: '#F5F5F5',
            elevation: 0,
          },
        }}>
        <MainStack.Screen name="SplashScreen" getComponent={SplashScreen} />
      </MainStack.Navigator>
    </SafeAreaProvider>
  </NavigationContainer>;
};

export default RootNavigation;
