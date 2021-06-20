import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class PasswordLock extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block center={true} style={styles.loginContainer}>
              <Block flex>
                <Block style={{marginTop:30}} flex={0.17} middle>
                  <Text color="#121212" size={20}>
                   Hi, Admin
                  </Text>
                  <Text color="#8898AA" size={12}>
                   Enter pin to unlock
                  </Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block  row={true} space={'evenly'} width={width * 0.8} style={{ marginTop: 15 }}>
                      <Input
                        borderless
                        placeholder="*"
                        style={{ width:60 }}
                      />
                       <Input
                        borderless
                        placeholder="*"
                        style={{ width:60 }}
                      />
                       <Input
                        borderless
                        placeholder="*"
                        style={{ width:60 }}
                      />
                       <Input
                        borderless
                        placeholder="*"
                        style={{ width:60 }}
                      />
                    </Block>
                    <Block middle>
                      <Button color="primary"  onPress={() => navigation.navigate("App")} style={styles.createButton}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          NEXT
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    width: width * 0.9,
    height: height * 0.280,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  inputIcons: {
    marginRight: 12
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default PasswordLock;
