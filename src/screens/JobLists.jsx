import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function JobLists({ item }) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFF",
          padding: 16,
          borderRadius: 16,
          marginBottom: 16,
        }}
        onPress={() =>
          navigation.navigate("Job", {
            item: item,
          })
        }
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/google_logo.png")} />
            <View style={{ marginLeft: 8 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#8a8c92",
                  marginVertical: 0,
                  fontFamily: "Poppins_500Medium",
                }}
              >
                {item.workMode}
              </Text>
            </View>
          </View>
          <Ionicons name="bookmark-outline" size={24} color="#000" />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              fontFamily: "poppins_600SemiBold",
            }}
          >
            {item.Salary}
            <Text
              style={{
                color: "#8a8c92",
                fontSize: 16,
                fontWeight: 400,
                fontFamily: "Poppins_400Regular",
              }}
            >
              /Year
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              color: "#8a8c92",
              fontFamily: "Poppins_400Regular",
            }}
          >
            {item.time}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
