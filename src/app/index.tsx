import {  Text, View,  } from "react-native";
import { Link } from "expo-router";

const Index = () => {

  return (
    <View className="flex justify-center items-center h-full">
        <Link href="/homeScreen">
          <Text className="text-blue-500 text-2xl mt-4">
            Go to Second Screen
          </Text>
        </Link>

        <Link href="/profileScreen" className="mt-10">
          <Text>Go to Profile</Text>
        </Link>
    </View>
  );
};

export default Index;
