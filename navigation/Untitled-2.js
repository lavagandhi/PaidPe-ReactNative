import React, { useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import axios from 'axios';
import { AsyncStorage } from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import config from '../config'

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { AuthContext } from "../components/Context";

const { width, height } = Dimensions.get("screen");

  
const Users = [
    {
        id: 1, 
        email: 'user1@email.com',
        username: 'user1', 
        password: 'password', 
        userToken: 'token123'
    },
    {
        id: 2, 
        email: 'user2@email.com',
        username: 'user2', 
        password: 'pass1234', 
        userToken: 'token12345'
    },
    {
        id: 3, 
        email: 'testuser@email.com',
        username: 'testuser', 
        password: 'testpass', 
        userToken: 'testtoken'
    },
];

export default function Login() {

  const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
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
        if( val.trim().length >= 8 ) {
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


  useEffect(() => {
    console.log('ssss', config.API_PATH)

    // setTimeout(async() => {
    //   let userToken;
    //   userToken = null;
    //   try {
    //     userToken = await AsyncStorage.removeItem('userToken');
    //   } catch(e) {
    //     console.log(e);
    //   }
    // }, 100);
  }, []);

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

        const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
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


    const loginHandle = (userName, password) => {

      const headers = {
        'Content-Type': 'application/json'
      }
      

      axios.post(`${config.API_PATH}/api/auth/signin`, data, {
        headers: headers
      })
      .then((response) => {
       console.log('response', res)
      })
      // .catch((error) => {
      //   console.log('response', res)
      // })

        // const foundUser = Users.filter( item => {
        //     return userName == item.username && password == item.password;
        // } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        console.log(foundUser)
        signIn(foundUser);
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
                      placeholder="User Name / Email ID"
                      value="gandhi@gmail.com"
                       onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
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
                     { data.isValidUser ? null : 
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            }
                  </Block>
                  <Block width={width * 0.8}>
                    <Input
                      password
                      borderless
                      value="Lava@2018"
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
                    { data.isValidPassword ? null : 
                    <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    }
                    </Block>
                  </Block>
                  <Block middle>
                    <Button
                      color="primary"
                       onPress={() => {loginHandle( data.username, data.password )}}
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
