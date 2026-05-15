import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../context/AuthContext';

import AuthNavigator from './AuthNavigator';
import MainTabs from './MainTabs';

import SplashScreen from '../screens/SplashScreen';

export default function RootNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <AuthNavigator />}
    </NavigationContainer>
  );
}