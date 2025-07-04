import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#1e293b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '600' },
        }}
      />
    </Provider>
  );
};
export default RootLayout;