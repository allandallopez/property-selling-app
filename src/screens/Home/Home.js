import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { ArrowLeftIcon, ProfileDummyIcon } from '@svgIcons'

import { font } from '@utils'

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
      height: 192,
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
