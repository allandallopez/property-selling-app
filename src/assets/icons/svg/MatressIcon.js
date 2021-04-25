import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function MatressIcon(props) {
   return (
      <Svg width={24} height={22} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <G
            clipPath="url(#prefix__clip0)"
            stroke="#747474"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round">
            <Path d="M1 20.177v-5.41a4 4 0 014-4h12.848a5 5 0 015 5v3.785M1.236 15.259H22.6M3.117 6.764h16.745M3.127 2.492v8.038M20.354 2.492v8.038M20.089 6.1A9.523 9.523 0 0011.736 1a9.527 9.527 0 00-8.392 5.174" />
         </G>
         <Defs>
            <ClipPath id="prefix__clip0">
               <Path fill="#fff" d="M0 0h23.848v21.177H0z" />
            </ClipPath>
         </Defs>
      </Svg>
   )
}

export default MatressIcon
