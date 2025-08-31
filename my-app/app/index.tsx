import { StyleSheet, View, Text, ScrollView } from "react-native";
import { TextSizes } from "@/constants/TextSizes";
import { Button } from "react-native-elements";
import { Colors } from "@/constants/Colors";
import { useState } from "react";

interface FoodProps {
  name: string;
  price: number;
  date: string;
}

const incomingFoodList: FoodProps[] = [
  {
    name: "Pizza",
    price: 30,
    date: "20/01/2020",
  },
  {
    name: "Coca-Cola",
    price: 10,
    date: "20/01/2020",
  },
];

const HomePage = () => {
  const [foodList, setFoodList] = useState<FoodProps[]>(incomingFoodList); //Possibilidade de inserção de nova lista de alimentos via useState

  const showIcons = () => {
    const iconsToShow: string[] = [
      "flight",
      "home",
      "local-dining",
      "directions-car",
      "build",
    ];
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        {iconsToShow.map((element, index) => (
          <Button buttonStyle={{ backgroundColor: Colors.mediumBlack }} key={index} icon={{ name: element, color: 'white' }} />
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.containerWhite }}>
      <View
        style={{
          backgroundColor: Colors.lightRed,
          alignItems: "center",
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
          paddingBottom: 50,
        }}
      >
        <Text
          style={{ fontSize: TextSizes.big, marginTop: 40, color: "white" }}
        >
          Bem vindo, Carlos
        </Text>

        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Text style={{ fontSize: TextSizes.medium, color: "white" }}>
            Você gastou hoje
          </Text>
          <Text style={{ fontSize: TextSizes.big, color: "white" }}>
            R$ 500
          </Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
          >
            ESCOLHER PERÍODO:
          </Text>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Text style={{ fontSize: TextSizes.small, color: "white" }}>
              Hoje
            </Text>
            <Text style={{ fontSize: TextSizes.small, color: "white" }}>
              Essa Semana
            </Text>
            <Text style={{ fontSize: TextSizes.small, color: "white" }}>
              Esse Mês
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 30, flex: 1 }}>
        {showIcons()}

        <ScrollView>
          {foodList.map((element, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                paddingVertical: 20,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text>{element.name}</Text>
                <Text>(R${element.price})</Text>
              </View>
              <Text>{element.date}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
