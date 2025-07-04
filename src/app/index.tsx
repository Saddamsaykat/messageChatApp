import { Button, Text, View, TouchableOpacity } from "react-native";
import CounterView from "../component/CounterView";
import App from "./App";

const Index = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
    alert("Shonda ekta kumirer baccha , sagol, bandor");
  };

  return (
    <View className="flex-1 bg-white">
      {/* Navbar */}
      <View className="flex-row justify-between items-center bg-blue-600 px-4 py-3">
        <Text className="text-white text-lg font-bold">MyApp</Text>
        <TouchableOpacity onPress={() => alert("Menu clicked!")}>
          <Text className="text-white text-base">Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View className="flex justify-center items-center h-[600px]">
        <View className="mt-4 p-4 bg-blue-500 rounded-lg">
          <Button title="Click Me" onPress={handleButtonClick} />
        </View>
        <CounterView />
        <App />
      </View>
    </View>
  );
};

export default Index;
