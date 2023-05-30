import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Kohana } from "react-native-textinput-effects";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { color, windowHeight } from "../../utils";
import { Controller } from "react-hook-form";

type Props = {
  iconClass: any;
  iconName: any;
  label: any;
  secureTextEntry: boolean;
  control: any;
  name: any;
  rules: any;
};

const LoginInput: React.FC<Props> = ({
  iconClass,
  iconName,
  label,
  secureTextEntry,
  control,
  name,
  rules = {},
}) => {
  const [eyePassword, setEyePassword] = useState(secureTextEntry);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View
          style={{
            alignItems: "center",
            marginVertical: windowHeight * 0.015,
          }}
        >
          <Kohana
            style={styles.inputBox}
            secureTextEntry={eyePassword}
            label={label}
            iconClass={iconClass}
            iconName={iconName}
            iconColor={color.Primary}
            inputPadding={16}
            labelStyle={{ color: color.Primary }}
            inputStyle={{
              color: color.Primary,
              fontSize: eyePassword ? 20 : 20,
            }}
            value={value}
            onChangeText={onChange}
            useNativeDriver
          />
          {secureTextEntry && (
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => {
                setEyePassword(!eyePassword);
              }}
            >
              {eyePassword ? (
                <FontAwesome5 name={"eye"} size={20} color={color.Primary} />
              ) : (
                <FontAwesome5
                  name={"eye-slash"}
                  size={20}
                  color={color.Primary}
                />
              )}
            </TouchableOpacity>
          )}
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default LoginInput;
