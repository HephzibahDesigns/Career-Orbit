import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { jobData } from "../component/jobData";
import JobLists from "./JobLists";

const HomeScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, marginTop: 16 }}>
      <View
        style={{
          flex: 0.2,
          backgroundColor: "#3F6CDF",
          padding: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <View>
            <Text
              style={{
                color: "#FFF",
                fontSize: 16,
              }}
            >
              Hello,
            </Text>
            <Text
              style={{
                color: "#FFF",
                fontSize: 26,
                fontWeight: "600",
              }}
            >
              John Doe
            </Text>
          </View>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#FFF"
            style={{
              padding: 8,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: 10,
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: "#fbfdff",
            padding: 12,
            borderRadius: 16,
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: -25,
            width: 350,
            alignSelf: "center",
          }}
        >
          <Ionicons name="search" size={24} color="#171716" />
          <TextInput
            placeholder="Search job, company, etc.."
            placeholderTextColor={"#171716"}
            style={{
              marginLeft: 8,
              flex: 1,
            }}
          />
        </View>
      </View>

      <View style={{ flex: 0.82, padding: 16 }}>
        <Text
          style={{
            marginVertical: 32,
            fontSize: 24,
            fontWeight: "600",
          }}
        >
          Recommendations
        </Text>
        <View style={{ height: 260 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          >
            <View
              style={{
                backgroundColor: "#f9fafe",
                padding: 16,
                borderRadius: 16,
                width: 280,
                height: 250,
                marginRight: 16,
                display: "flex",
                justifyContent: "space-between",

                // Shadow for iOS
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                // Shadow for Android
                elevation: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../../assets/facebook_logo.png")}
                    style={{
                      width: 30, // Adjust the width as needed
                      height: 30, // Adjust the height as needed
                      resizeMode: "contain",
                    }}
                  />
                  <View style={{ marginLeft: 8 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      Facebook
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                      }}
                    >
                      California, USA
                    </Text>
                  </View>
                </View>
                <Ionicons name="bookmark-outline" size={28} color="#000" />
              </View>

              <View style={{ marginTop: 25 }}>
                <Text style={{ fontSize: 22, fontWeight: "600" }}>
                  Motion Designer
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 5,
                  }}
                >
                  <Text style={{ fontSize: 14, color: "#8a8c92" }}>Senior</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#8a8c92",
                      marginHorizontal: 5,
                    }}
                  >
                    •
                  </Text>
                  <Text style={{ fontSize: 14, color: "#8a8c92" }}>Remote</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#8a8c92",
                      marginHorizontal: 5,
                    }}
                  >
                    •
                  </Text>
                  <Text style={{ fontSize: 14, color: "#8a8c92" }}>
                    Fulltime
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#406ce0",
                    padding: 15,
                    borderRadius: 12,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFF",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    Apply Now
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "600",
                  }}
                >
                  $7K{""}
                  <Text
                    style={{
                      color: "#8a8c92",
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    /Month
                  </Text>
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                padding: 16,
                borderRadius: 16,
                width: 280,
                height: 250,
                marginRight: 16,
                display: "flex",
                justifyContent: "space-between",

                // Shadow for iOS
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                // Shadow for Android
                elevation: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={require("../../assets/pinterest_logo.png")} />
                  <View style={{ marginLeft: 8 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      Pinterest
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "400",
                      }}
                    >
                      California, USA
                    </Text>
                  </View>
                </View>
                <Ionicons name="bookmark-outline" size={24} color="#000" />
              </View>
              <View style={{ marginTop: 25 }}>
                <Text style={{ fontSize: 22, fontWeight: "600" }}>
                  UI Designer
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 5,
                  }}
                >
                  <Text style={{ fontSize: 14, color: "#8a8c92" }}>Senior</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#8a8c92",
                      marginHorizontal: 5,
                    }}
                  >
                    •
                  </Text>
                  <Text style={{ fontSize: 14, color: "#8a8c92" }}>Remote</Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#8a8c92",
                      marginHorizontal: 5,
                    }}
                  >
                    •
                  </Text>
                  <Text style={{ fontSize: 14, color: "#8a8c92" }}>
                    Fulltime
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#406ce0",
                    padding: 15,
                    borderRadius: 12,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFF",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                  >
                    Apply Now
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "600",
                  }}
                >
                  $100K{""}
                  <Text
                    style={{
                      color: "#8a8c92",
                      fontSize: 16,
                      fontWeight: 400,
                    }}
                  >
                    /Month
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <Text
            style={{
              marginVertical: 32,
              fontSize: 24,
              fontWeight: "600",
            }}
          >
            Recent Job List
          </Text>
          <FlatList
            data={jobData}
            key={jobData.id}
            keyExtractor={(item) => item.id}
            scrollEnabled={false} // Disables FlatList's internal scrolling
            renderItem={({ item }) => {
              return <JobLists item={item} />;
            }}
            ListEmptyComponent={
              <Text
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  paddingTop: 20,
                }}
              >
                No Item Found
              </Text>
            }
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
