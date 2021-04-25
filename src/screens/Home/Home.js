import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { ArrowLeftIcon, ProfileDummyIcon } from '@svgIcons'
import { font } from '@utils'

import Listing from './Listing'
import Favorite from './Favorite'
import Arsip from './Arsip'

const Tab = createMaterialTopTabNavigator()

const HomePage = () => {
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <ArrowLeftIcon />

            <View style={styles.profile}>
               <ProfileDummyIcon />
            </View>

            <View style={{ alignSelf: 'center', justifyContentL: 'center', alignItems: 'center' }}>
               <Text style={styles.userTitle}>Henry Scott</Text>
               <Text style={{ ...styles.userTitle, fontWeight: 'normal' }}>Member Broker Century 21 BSD</Text>
            </View>
         </View>
         <Tab.Navigator
            swipeEnabled={false}
            initialRouteName={'Listing'}
            tabBarOptions={{
               activeTintColor: '#BEAF87',
               inactiveTintColor: '#000000',
               labelStyle: {
                  textTransform: 'none',
                  fontSize: 13,
                  fontFamily: font.AvenirRegular,
                  fontWeight: '700',
                  flex: 1,
                  flexDirection: 'row',
               },
               scrollEnabled: false,
               indicatorStyle: {
                  borderBottomWidth: 4,
                  borderBottomColor: '#BEAF87',
               },
               style: { backgroundColor: '#F9F9F9' },
            }}>
            <Tab.Screen name="Listing" component={Listing} />
            <Tab.Screen name="Favorite" component={Favorite} />
            <Tab.Screen name="Arsip" component={Arsip} />
         </Tab.Navigator>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'rgba(249, 249, 249, 0.31)',
   },
   header: {
      paddingHorizontal: 16,
      paddingVertical: 17,
      width: '100%',
      height: null,
      backgroundColor: '#F9F9F9',
   },
   profile: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#BEAF87',
   },
   userTitle: {
      fontFamily: font.AvenirRegular,
      fontSize: 12,
      fontWeight: 'bold',
      color: '#323232',
   },
})

export default HomePage
