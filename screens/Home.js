import React from 'react';
import { StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, View } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel'
import { argonTheme } from '../constants';
import { Card } from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import articles from '../constants/articles';
const { width, height } = Dimensions.get('screen');

import CardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/CardItem'
import data from '../constants/data'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.isCarousel = React.createRef();
  }
  
  render() {
     const { navigation } = this.props;
    return (
       <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
            <StatusBar style="light" backgroundColor="#2c3da0" />
      <Block flex center style={styles.home}>
      <Carousel
        layout="default"
        // layoutCardOffset={9}
        ref={this.isCarousel}
        autoplay
        autoplayTimeout={5000}
        loop
        data={data}
        renderItem={CardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      {/* <Pagination
        dotsLength={data.length}
        activeDotIndex={this.state.index}
        carouselRef={this.isCarousel}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          position: 'absolute',
          top:220,
          left:'auto',
          right:'auto',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      /> */}
        
      <Block card row={false} space={'between'} style={styles.customCard}>
       <Text bold size={16} style={styles.title}>
          Recharge
        </Text>
        <Block row  space={'between'} >
       <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Prepaid')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="mobile"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Prepaid</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="mobile"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>DTH</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="mobile"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>DTH Refresh</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="mobile"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Special Recharge</Text>
          </Block>
        </TouchableOpacity>
      </Block>
      </Block>



       <Block card row={false} space={'between'} style={styles.customCard}>
       <Text bold size={16} style={styles.title}>
          Bill Payment
        </Text>
        <Block row  space={'between'} >
       <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Postpaid</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Electricity</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Landline</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>UPI Payment</Text>
          </Block>
        </TouchableOpacity>
      </Block>
     
      
        <Block row  space={'between'} style={{marginTop:12}}>
       <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Traffic Fine</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Data Card</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Insurance</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Gas</Text>
          </Block>
        </TouchableOpacity>
      </Block>
      </Block>

        <Block card row={false} space={'between'} style={styles.customCard}>
       <Text bold size={16} style={styles.title}>
          Travel
        </Text>
        <Block row  space={'between'} >
       <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Bus</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Flight</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Hotel</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Cab</Text>
          </Block>
        </TouchableOpacity>
      </Block>
      </Block>

       <Block card row={false} space={'between'} style={styles.customCard}>
       <Text bold size={16} style={styles.title}>
          Other Services
        </Text>
        <Block row  space={'between'} >
       <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Mini ATM</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Pan Card</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Water Bill</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Money Transfer</Text>
          </Block>
        </TouchableOpacity>
      </Block>
       <Block row  space={'between'}  style={{marginTop:12}}>
       <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Fastag</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Loan Payment</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>Aeps</Text>
          </Block>
        </TouchableOpacity>
         <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('Pro')}>
          <Block center width={80}>
            <Icon
      size={20}
      name="rocket"
      style={styles.customIcon}
      color={argonTheme.COLORS.BLACK}
    />
             <Text size={12} style={{textAlign:'center'}}>UPI</Text>
          </Block>
        </TouchableOpacity>
      </Block>
      </Block>

        {/* {this.renderArticles()} */}
      </Block>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  customIcon:{
    width:40,
    height:40,
    backgroundColor:'grey',
    borderRadius:50,
    color:'white',
    marginBottom:5,
    textAlign:'center',
    textAlignVertical: 'center'
  },
  customCard:{
    backgroundColor:'white',
    // marginTop:15,    
    marginVertical:5,    
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2
  },
  articles: {
    // width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 1,
    color: argonTheme.COLORS.HEADER
  }
});

export default Home;
