import { StyleSheet, TextInput, type TextInputProps, View } from 'react-native'
import {Eye, EyeClosed, type LucideIcon} from 'lucide-react-native'
import { Colors } from '@/themes/Colors'
import { FontsWeightConfig } from '@/constants/font_config'
import { useState } from 'react'
import {Button, AppText} from '@/shared/components'

interface FormInputProps extends TextInputProps {
    isPass?: boolean,
    Icon?: LucideIcon,
    errMsg?: string,
    label?: string,
}

const FormInput = ({isPass=false, Icon, errMsg="", label="", ...props} : FormInputProps) => {

    const [isFocus, setFocus] = useState<boolean>(false)
    const [showPass, setShowPass] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            {label && (
                <View style={styles.labelContainer}>
                    <AppText>{label}</AppText>
                    {errMsg && <AppText style={styles.errMsg}>{errMsg}</AppText>}
                </View>
            )}

            <View style={styles.inputContainer}>
                {Icon && <Icon style={styles.icon} size={20} color={Colors.secondary[700]} />}
                <TextInput style={styles.form} {...props} secureTextEntry={showPass} />
                {isPass && (
                    <Button onPress={() => setShowPass(!showPass)}>
                        {showPass ? <EyeClosed style={styles.icon} size={20} color={Colors.secondary[700]} /> : <Eye style={styles.icon} size={20} color={Colors.secondary[700]} />}
                    </Button>
                )}
            </View>
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
    },
    labelContainer: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        marginTop: 4, 
        alignItems:"center",
        justifyContent: 'space-between'
    },
    errMsg: {
        color: Colors.danger
    },
    inputContainer: {
        display: "flex",
        height: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1.5,
        overflow: 'hidden',
        borderRadius: 8,
        borderColor: Colors.secondary[200],
        color: Colors.primary[500],
        fontFamily: FontsWeightConfig[400]
    },
    form: {
        flex: 1,
        flexGrow: 1,
        backgroundColor: 'transparent'
    },
    icon: {
        marginHorizontal: 8,
    }
})