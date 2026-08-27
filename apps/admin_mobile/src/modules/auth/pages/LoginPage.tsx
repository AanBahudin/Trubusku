import { Colors } from "@/themes/Colors";
import { StyleSheet, View } from "react-native";
import { AuthBackground } from "@/modules/auth/components";
import {AppText} from "@/shared/components";
import {FormInput} from "@/shared/components";
import { AtSign } from "lucide-react-native";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background} pointerEvents="none">
        <AuthBackground />
      </View>

      <View style={styles.login_container}>
        <AppText fontSize="xl" weight="700" style={styles.title}>Selamat Datang</AppText>
        <AppText fontSize="xs" style={styles.desc}>Silahkan login untuk masuk ke aplikasi</AppText>

        {/* form container */}
        <View style={styles.form_container}>
          <AppText>Email</AppText>
          <FormInput Icon={AtSign} placeholder="Masukan email" />
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  login_container: {
    display: "flex",
    paddingHorizontal: 30,
    paddingVertical: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    width: "40%",
    height: "50%",
    backgroundColor: Colors.background.card,
    borderRadius: 20,
  },
  title: {
    color: Colors.primary[900]
  },
  desc: {
    marginTop: 4
  },
  form_container: {
    flex: 1,
    width: "100%"
  }
});