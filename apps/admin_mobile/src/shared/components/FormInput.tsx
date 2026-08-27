import { StyleSheet, TextInput, type TextInputProps, View } from 'react-native'
import {Eye, type LucideIcon} from 'lucide-react-native'
import { Colors } from '@/themes/Colors'
import { FontsWeightConfig } from '@/constants/font_config'
import { useState } from 'react'

interface FormInputProps extends TextInputProps {
    isPass?: boolean,
    Icon?: LucideIcon
}

const FormInput = ({isPass=false, Icon, ...props} : FormInputProps) => {

    const [isFocus, setFocus] = useState<boolean>(false)
    const [showPass, setShowPass] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            {Icon && <Icon style={styles.icon} size={20} stroke={Colors.secondary[700]} />}
            <TextInput style={styles.form} {...props} />
            {isPass && <Eye style={styles.icon} size={20} stroke={Colors.secondary[700]} />}
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        overflow: 'hidden',
        borderRadius: 8,
        borderColor: Colors.secondary[200],
        color: Colors.primary[500],
        fontFamily: FontsWeightConfig[400]
    },
    form: {
        flexGrow: 1,
        backgroundColor: 'transparent'
    },
    icon: {
        marginHorizontal: 8,
    }
})