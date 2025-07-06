import { useGetAllCountryQuery } from '@/src/redux/slice/countrySlice/countrySlice';
import { View, Text, ScrollView } from 'react-native';
import { Image } from 'expo-image';

const SkeletonCard = () => (
  <View className="w-[48%] mb-4 bg-gray-200 rounded-md animate-pulse">
    <View className="h-5 bg-gray-300 rounded mt-2 mb-2 mx-2" />
    <View className="h-[60px] bg-gray-300 rounded mx-2 mb-2" />
  </View>
);

const HomeScreen = () => {
  const { data, isLoading } = useGetAllCountryQuery([]);

  const sortedData = data?.slice().sort((a: any, b: any) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <ScrollView className="max-h-[550px]">
      <View className="flex-row flex-wrap justify-between p-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : sortedData?.map((item: any, index: number) => (
              <View key={index} style={{ width: '48%', marginBottom: 15 }}>
                <Text style={{ fontSize: 18, marginBottom: 5 }}>{item.name.common}</Text>
                <Image
                  source={{ uri: item.flags.png }}
                  style={{ width: '100%', height: 60 }}
                  contentFit="cover"
                />
              </View>
            ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
