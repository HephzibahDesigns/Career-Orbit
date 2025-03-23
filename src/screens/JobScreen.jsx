import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Fragment, useState } from "react";
import { useRoute } from "@react-navigation/native";

const JobScreen = () => {
  const param = useRoute().params;

  const [jobDetail, setJobDetail] = useState(param.item);

  return (
    <Fragment>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFF",
        }}
      >
        <View style={{ zIndex: 10 }}>
          <Image
            source={require("../../assets/office.png")}
            style={{
              width: 420,
              resizeMode: "cover",
            }}
          />
          <Image
            source={require("../../assets/google_banner.png")}
            style={{
              position: "absolute",
              alignSelf: "center",
              bottom: -35,
            }}
          />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <View
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            key={jobDetail.id}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 24,
                fontWeight: "600",
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              {jobDetail.title}
            </Text>
            <Text
              style={{
                fontWeight: "300",
                fontSize: 16,
                color: "#8a8c92",
                fontFamily: "Poppins_400Regular",
              }}
            >
              {jobDetail.location}, {jobDetail.country}
            </Text>
          </View>

          <View style={{ padding: 16 }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                Role Description
              </Text>
              <Text
                style={{
                  fontWeight: "300",
                  fontSize: 14,
                  color: "#8a8c92",
                  fontFamily: "Poppins_400Regular",
                }}
              >
                {jobDetail.description}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                fontFamily: "Poppins_600SemiBold",
                marginVertical: 5,
              }}
            >
              Job Responsibilities
            </Text>

            <View>
              {jobDetail.responsibilities.map((item, index) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                  key={index}
                >
                  <Text
                    style={{
                      paddingHorizontal: 5,
                    }}
                  >
                    •
                  </Text>
                  <Text
                    style={{
                      marginBottom: 7,
                      textAlign: "left",
                      fontWeight: "500",
                      fontSize: 14,
                      color: "#8a8c92",
                      fontFamily: "Poppins_500Medium",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={{ padding: 16 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                fontFamily: "Poppins_600SemiBold",
              }}
            >
              Skills / Qualifications
            </Text>
            <View>
              {jobDetail.skills.map((item, index) => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                  key={index}
                >
                  <Text
                    style={{
                      paddingHorizontal: 5,
                    }}
                  >
                    •
                  </Text>
                  <Text
                    key={index}
                    style={{
                      marginBottom: 7,
                      textAlign: "left",
                      fontWeight: "500",
                      fontSize: 14,
                      color: "#8a8c92",
                      fontFamily: "Poppins_500Medium",
                    }}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            padding: 16,
            position: "static",
            bottom: 0,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              marginRight: 16,
              backgroundColor: "#3F6CDF",
              padding: 16,
              borderRadius: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFF",
              }}
            >
              Apply Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#3F6CDF",
              padding: 16,
              borderRadius: 16,
            }}
          >
            <Ionicons name="chatbox-ellipses-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

export default JobScreen;
