import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

import { CardProperty } from '@components'

const Favorite = () => {
   const data = useSelector((state) => state.listFavProperty)

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

export default Favorite
