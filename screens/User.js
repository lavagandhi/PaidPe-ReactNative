import React from "react";
import { ScrollView, StyleSheet, Dimensions, KeyboardAvoidingView, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";

// Argon themed components
import { argonTheme } from "../constants/";
import { Button, Select, Icon, Input } from "../components/";


const { width, height } = Dimensions.get("screen");

class User extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={{ paddingVertical:30, width }}>
          <Block flex>
            <Block middle>
              <Text color="#8898AA" size={18}>
                Sign Up
              </Text>
            </Block>
            <Block flex center>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                enabled
              >
                <Block width={width * 0.8} style={{ marginBottom: 50 }}>
                  <Input
                    borderless
                    placeholder="First Name"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="hat-3"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                      />
                    }
                  />
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 50 }}>
                  <Input
                    borderless
                    placeholder="Last Name"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="hat-3"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                      />
                    }
                  />
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 50 }}>
                  <Input
                    borderless
                    placeholder="Email"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="ic_mail_24px"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                      />
                    }
                  />
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 50 }}>
                  <Input
                    password
                    borderless
                    placeholder="Password"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="padlock-unlocked"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                      />
                    }
                  />
                  {/* <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text>
                      </Block> */}
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 50 }}>
                  <Input
                    borderless
                    placeholder="Gender"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="ic_mail_24px"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                      />
                    }
                  />
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 50 }}>
                  <Input
                    borderless
                    placeholder="Phone No"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="ic_mail_24px"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                      />
                    }
                  />
                </Block>
                <Block width={width * 0.8} style={{ marginBottom: 50 }}>
                  <Input
                    borderless
                    placeholder="Date of birth"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="ic_mail_24px"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                      />
                    }
                  />
                </Block>
                <Block middle>
                  <Button color="primary" style={styles.createButton}>
                    <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                      CREATE ACCOUNT
                    </Text>
                  </Button>
                </Block>
              </KeyboardAvoidingView>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
    marginTop: 20,
    position: 'absolute',
    bottom: 20

  },
  group: {
    width: width - theme.SIZES.BASE * 2
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2
  },
  button: {
    marginTop: theme.SIZES.BASE * 2,
    width: width - theme.SIZES.BASE * 5,
    marginHorizontal: theme.SIZES.BASE * 1.5
  },
  select: {
    marginBottom: theme.SIZES.BASE * 1,
  },
  input: {
    marginBottom: theme.SIZES.BASE * 1,
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

export default User;