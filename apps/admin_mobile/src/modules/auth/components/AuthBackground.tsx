import Svg, {
  Defs,
  RadialGradient,
  Stop,
  Rect,
} from "react-native-svg";

const AuthBackground = () => {
  return (
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <Defs>
        <RadialGradient
          id="authBackgroundGradient"
          cx="50%"
          cy="50%"
          r="100%"
        >
          <Stop
            offset="0%"
            stopColor="#CFFFEb"
          />

          <Stop
            offset="50%"
            stopColor="#6CFCD2"
          />

          <Stop
            offset="100%"
            stopColor="#0DF6CF"
          />
        </RadialGradient>
      </Defs>

      <Rect
        x="0"
        y="0"
        width="1600"
        height="900"
        fill="url(#authBackgroundGradient)"
      />
    </Svg>
  );
};

export default AuthBackground