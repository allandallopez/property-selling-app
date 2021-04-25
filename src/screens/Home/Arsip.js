import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { CardProperty } from '@components'

const Arsip = () => {
   const data = useSelector((state) => state.listArchProperty)

   return (
      <View style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: -22 }}>
            {data.map((item, index) => (
               <View key={index}>
                  <CardProperty data={item} />
               </View>
            ))}
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 12,
      paddingHorizontal: 22,
   },
})

export default Arsip
