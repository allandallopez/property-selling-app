import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function BathtubIcon(props) {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        clipPath="url(#prefix__clip0)"
        stroke="#747474"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M6.845 6.36l3.623-4a2.422 2.422 0 00-3.623-.321c-2.088 1.72 0 4.321 0 4.321z" />
        <Path d="M6.748 2.092A2.55 2.55 0 004.525 1C2.93 1 2.772 2.991 2.772 3.8v5.05M21.095 9.223H2.58A1.58 1.58 0 001 10.803v.001c0 .873.707 1.58 1.58 1.58h18.515a1.58 1.58 0 001.58-1.58v-.001a1.58 1.58 0 00-1.58-1.58z" />
        <Path d="M2.355 12.294h18.966a6.773 6.773 0 01-6.773 6.773h-5.42a6.773 6.773 0 01-6.773-6.773v0zM4.387 20.647l1.58-1.58M17.482 20.647l-1.58-1.58" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h23.675v22.062H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default BathtubIcon
