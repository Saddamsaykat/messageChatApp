import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useGetAllMobileQuery } from "../redux/slice/countrySlice/countrySlice";

interface Mobile {
  id: string | number;
  name: string;
  data?: {
    color?: string;
    capacity?: number;
  };
}

export default function CounterView() {
  const { data, isLoading } = useGetAllMobileQuery([]);
  console.log("Mobile Data=========", data);

  return (
    <View className="p-5">
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView
          className="bg-gray-100 p-10 rounded-lg mt-5"
          style={{ maxHeight: 200 }}
        >
          {
          // data &&
            data?.map((mobile: Mobile) => (
              <View
                key={mobile?.id}
                className="mb-2 flex items-center justify-between gap-6 p-2 bg-white rounded-lg shadow"
              >
                <Text>{mobile?.id}</Text>
                <Text>{mobile?.name}</Text>
                <View>
                  <Text>
                    {mobile?.data?.color ? mobile.data.color : "No Color"}
                  </Text>
                  <Text>{mobile?.data?.capacity}</Text>
                </View>
              </View>
            ))}
        </ScrollView>
      )}
    </View>
  );
}
