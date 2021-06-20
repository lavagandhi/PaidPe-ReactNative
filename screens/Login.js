import React, { useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Block, Checkbox, Text, theme } from "galio-framework";
import config from '../config'
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

export default function Login({ navigation }) {
  const [data, setData] = React.useState({
    username: 'webriversgandhi@gmail.com',
    password: 'Temp!123',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    foundUser: null
  });
  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  }
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      });
    }
  }

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        isValidUser: false
      });
    }
  }
  const loginHandle = (username, password) => {
    axios.post(`${config.API_PATH}/api/auth/signin`, {
      useremail: username,
      password: password
    })
      .then(async response => {
        const token = String(response?.data?.data?.accessToken)
        var decoded = jwt_decode(token);
        console.log('decoded', decoded.roles[0])
         await AsyncStorage.setItem('@userToken', token);
        const authToken = await AsyncStorage.getItem('@userToken');
        
        if(authToken){
          switch(decoded.roles[0]) {
            case 'admin':
              return  navigation.navigate("App");
            default:
              return 'foo';
          }
         
        }else{
          navigation.navigate("Login")
        }
      })
      .catch((error) => {
        console.log('error', error)
        throw error;
      })
  }

  return (
    <Block flex middle>
      <StatusBar hidden />
      <ImageBackground
        source={Images.RegisterBackground}
        style={{ width, height, zIndex: 1 }}
      >
        <Block safe flex middle>
          <Block style={styles.loginContainer}>
            <Block flex>
              <Block flex={0.17} middle>
                <Text color="#8898AA" size={20}>
                  SIGN IN
                </Text>
              </Block>
              <Block flex center>
                <KeyboardAvoidingView
                  style={{ flex: 1 }}
                  behavior="padding"
                  enabled
                >
                  <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                    <Input
                      borderless
                      value={data.username}
                      placeholder="User Name / Email ID"
                      onChangeText={(val) => textInputChange(val)}
                      onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
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
                    {data.isValidUser ? null :
                      <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                    }
                  </Block>
                  <Block width={width * 0.8}>
                    <Input
                      password
                      borderless
                      value={data.password}
                      secureTextEntry={data.secureTextEntry ? true : false}
                      placeholder="Password"
                      onChangeText={(val) => handlePasswordChange(val)}
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
                    <Block row style={styles.passwordCheck}>
                      {data.isValidPassword ? null :
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                      }
                    </Block>
                  </Block>
                  <Block middle>
                    <Button
                      color="primary"
                      onPress={() => { loginHandle(data.username, data.password) }}
                      style={styles.createButton}
                    >
                      <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        SIGN IN
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

const styles = StyleSheet.create({
  loginContainer: {
    width: width * 0.9,
    height: height * 0.38,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
});
