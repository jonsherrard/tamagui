import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Line x1="19" x2="10" y1="4" y2="4" stroke={`${color}`} />
      <Line x1="14" x2="5" y1="20" y2="20" stroke={`${color}`} />
      <Line x1="15" x2="9" y1="4" y2="20" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Italic'

export const Italic = memo<IconProps>(themed(Icon))
