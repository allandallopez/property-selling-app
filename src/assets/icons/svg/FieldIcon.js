import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function FieldIcon(props) {
   return (
      <Svg width={23} height={19} viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <G clipPath="url(#prefix__clip0)" stroke="#747474" strokeWidth={2} strokeMiterlimit={10} strokeLinecap="round">
            <Path d="M4.015 2.557A2 2 0 015.961 1h10.98a2 2 0 011.95 1.557l2.956 13A2 2 0 0119.9 18H3.009a1.999 1.999 0 01-1.948-2.443l2.954-13zM11.455 12.611V6" />
            <Path d="M10.955 6l-5 2.191 4.7 1.809" strokeLinejoin="round" />
         </G>
         <Defs>
            <ClipPath id="prefix__clip0">
               <Path fill="#fff" d="M0 0h22.909v19H0z" />
            </ClipPath>
         </Defs>
      </Svg>
   )
}

export default FieldIcon
