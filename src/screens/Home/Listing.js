import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import { MatressIcon, BathtubIcon, FieldIcon } from '@svgIcons'

import CardProperty from './components/CardProperty'

const Listing = () => {
   const [listProperty, setListProperty] = useState([
      {
         id: 1,
         username: 'Henry Scott',
         userLocation: 'Century 21 BSD',
         categoryName: 'Rumah',
         isPublic: true,
         isMonthly: false,
         property: {
            name: 'Nava Park BSD City',
            location: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
            image: require('../../assets/images/property-example.png'),
         },
         price: 6500000000,
         type: 1,
         facilities: [
            {
               idFac: 1,
               title: 'K. Tidur',
               ability: '3+1',
               icon: <MatressIcon />,
            },
            {
               idFac: 2,
               title: 'K. Mandi',
               ability: '3+1',
               icon: <BathtubIcon />,
            },
            {
               idFac: 3,
               title: 'L. Tanah',
               ability: '300 M',
               icon: <FieldIcon />,
            },
         ],
      },
      {
         id: 2,
         username: 'Henry Scott',
         userLocation: 'Century 21 BSD',
         categoryName: 'Apartement',
         isPublic: false,
         isMonthly: true,
         property: {
            name: 'Woody Residence Foresta',
            location: 'Jl. Edutown Kav III.1, BSD, Tangerang Selatan',
            image: require('../../assets/images/property-list-2.png'),
         },
         price: 10000000,
         type: 2,
         facilities: [
            {
               idFac: 1,
               title: 'K. Tidur',
               ability: '4  ',
               icon: <MatressIcon />,
            },
            {
               idFac: 2,
               title: 'K. Mandi',
               ability: '4  ',
               icon: <BathtubIcon />,
            },
            {
               idFac: 3,
               title: 'L. Tanah',
               ability: '275 M',
               icon: <FieldIcon />,
            },
         ],
      },
   ])

   return (
      <View style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: -22 }}>
            {listProperty.map((item, index) => (
               <CardProperty data={item} />
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

export default Listing
