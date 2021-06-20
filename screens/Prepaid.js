import React from "react";
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import Carousel from 'react-native-snap-carousel'

// Argon themed components
import { argonTheme, tabs } from "../constants/";
import { Button, Select, Icon, Input, Header, Switch } from "../components/";

import CardItem, { CardItemLarge, SLIDER_WIDTH, ITEM_WIDTH } from '../components/CardItem'
import data from '../constants/data'


const { width } = Dimensions.get("screen");

class Prepaid extends React.Component {

  constructor(props) {
    super(props);
    this.isCarousel = React.createRef();
  }



  renderInputs = () => {
    return (
      <Block flex card style={styles.customCard}>
       <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Input
            right
            style={styles.input}
            type={'number-pad'}
            placeholder="Phone Number"
            iconContent={
              <Block
                middle
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: argonTheme.COLORS.INPUT_SUCCESS
                }}
              >
                <Icon
                  size={11}
                  color={argonTheme.COLORS.ICON}
                  name="g-check"
                  family="ArgonExtra"
                />
              </Block>
            }
          />
        <Block flex row={true} space={'between'} style={{marginBottom: 40}} left>
              <Select
                // defaultIndex={1}
                style={{flex: 1, marginRight:10}}
                defaultValue={'Select Network'}
                options={["Vi Prepaid", "Jio Prepaid", "BSNL Prepaid", "Airtel Prepaid"]}
              />
               <Select
                style={{flex: 1, marginLeft:10}}
                defaultIndex={2}
                options={["Tamilnadu", "Karnataka", "Kerala", "Andra Pradesh", "Telangana"]}
              />
            </Block>
       
          <Input
            type={'number-pad'}
            right
            style={styles.input}
            placeholder="₹ Amount"
            iconContent={
              <Block
                middle
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: argonTheme.COLORS.INPUT_SUCCESS
                }}
              >
                <Icon
                  size={11}
                  color={argonTheme.COLORS.ICON}
                  name="g-check"
                  family="ArgonExtra"
                />
              </Block>
            }
          />
        </Block>
           <Button style={styles.button}>RECHAREGE</Button>
      </Block>
    );
  };

  

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ height: '100%', paddingBottom: 30, paddingTop: theme.SIZES.BASE * 6.5,  width }}>
          {this.renderInputs()}
          <Block flex center style={styles.home}>
          <Carousel
        layout="default"
        // layoutCardOffset={9}
        ref={this.isCarousel}
        autoplay
        autoplayTimeout={5000}
        loop
        data={data}
        renderItem={CardItemLarge}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToIndex={(index) => this.setState({index: index + 1})}
      />
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
    position:'absolute',
    bottom:20
    
  },
  customCard:{
    backgroundColor:'white',
    marginHorizontal:theme.SIZES.BASE * 1,    
    width: width - theme.SIZES.BASE * 2,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
    paddingVertical: theme.SIZES.BASE * 1.5,
    marginBottom:180,
    justifyContent:'space-between'
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
  select:{
    marginBottom: theme.SIZES.BASE * 1,
  },
  input: {
    marginBottom: theme.SIZES.BASE * 1,
  }
});

export default Prepaid;