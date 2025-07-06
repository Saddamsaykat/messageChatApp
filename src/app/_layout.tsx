import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

import "../../global.css";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
};
export default RootLayout;