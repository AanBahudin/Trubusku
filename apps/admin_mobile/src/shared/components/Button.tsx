import { buttonSize, buttonVariant } from '@/constants/button_config'
import { Colors } from '@/themes/Colors'
import { ReactNode } from 'react'
import { Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native'

interface ButtonProps extends Omit<PressableProps, "style"> {
    children: ReactNode,
    variant?: "default" | "outline" | "ghost" | "danger" | "icon" | "disabled",
    size?: "sm" | "md" | "lg" | "xl",
    style?: StyleProp<ViewStyle>
}

const Button = ({children, variant="default", size='md', style, ...props} : ButtonProps) => {
  return (
    <Pressable
        disabled={variant === 'disabled'}
        style={[styled.button, buttonSize[size], buttonVariant[variant], style]}
        {...props}
    >
      {children}
    </Pressable>
  )
}

export default Button

const styled = StyleSheet.create({
    button: {
      borderRadius: 10,
      color: Colors.primary[500],
      alignContent: "center",
      textAlign: "center",
      alignItems: "center"
  },
})