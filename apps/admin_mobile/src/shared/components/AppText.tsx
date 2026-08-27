import { FontsSizeConfig, FontsWeightConfig } from '@/constants/font_config';
import { Colors } from '@/themes/Colors'
import { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

interface AppTextProps extends TextProps {
    children?: ReactNode,
    weight?: "400" | "500" | "600" | "700",
    fontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

const AppText = ({children, style, weight="400", fontSize="base", ...props} : AppTextProps) => {
  return (
    <Text style={[
        styles.textStyle, 
        FontsSizeConfig[fontSize],
        {fontFamily: FontsWeightConfig[weight]}, 
        style
    ]} {...props}>{children}</Text>
  )
}

export default AppText

const styles = StyleSheet.create({
    textStyle: {
        color: Colors.secondary[400]
    }
})