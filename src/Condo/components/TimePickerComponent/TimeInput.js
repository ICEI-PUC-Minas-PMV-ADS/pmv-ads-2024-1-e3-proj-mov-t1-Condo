import * as React from "react"
import { View, TextInput, StyleSheet, Platform } from "react-native"
import { useTheme, TouchableRipple } from "react-native-paper"

import Color from "color"
import { inputTypes, useInputColors } from "./timeUtils"

function TimeInput(
  {
    value,
    clockType,
    pressed,
    onPress,
    onChanged,
    inputType,
    inputFontSize = 57,
    ...rest
  },
  ref
) {
  const [controlledValue, setControlledValue] = React.useState(`${value}`)

  const onInnerChange = text => {
    setControlledValue(text)
    if (text !== "" && text !== "0") {
      onChanged(Number(text))
    }
  }

  React.useEffect(() => {
    setControlledValue(`${value}`)
  }, [value])

  const theme = useTheme()
  const [inputFocused, setInputFocused] = React.useState(false)

  const highlighted = inputType === inputTypes.picker ? pressed : inputFocused

  const { color, backgroundColor } = useInputColors(highlighted)

  let formattedValue = controlledValue
  if (!inputFocused) {
    formattedValue =
      controlledValue.length === 1
        ? `0${controlledValue}`
        : `${controlledValue}`
  }

  return (
    <View style={styles.root}>
      <TextInput
        ref={ref}
        style={[
          styles.input,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            color,
            fontFamily: theme?.isV3
              ? theme.fonts.titleMedium.fontFamily
              : theme.fonts.medium.fontFamily,
            fontSize: inputFontSize,
            backgroundColor,
            borderRadius: theme.roundness * 2,
            borderColor:
              theme.isV3 && highlighted
                ? theme.colors.onPrimaryContainer
                : undefined,
            borderWidth: theme.isV3 && highlighted ? 2 : 0,
            height: inputType === inputTypes.keyboard ? 72 : 80
          }
        ]}
        maxFontSizeMultiplier={1.5}
        value={formattedValue}
        maxLength={2}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        keyboardAppearance={theme.dark ? "dark" : "default"}
        keyboardType="number-pad"
        onChangeText={onInnerChange}
        {...rest}
      />
      {onPress && inputType === inputTypes.picker ? (
        <TouchableRipple
          style={[
            StyleSheet.absoluteFill,
            styles.buttonOverlay,
            {
              borderRadius: theme.roundness
            }
          ]}
          rippleColor={
            Platform.OS !== "ios"
              ? Color(theme.colors.onSurface)
                  .fade(0.7)
                  .hex()
              : undefined
          }
          onPress={() => onPress(clockType)}
          borderless={true}
        >
          <View />
        </TouchableRipple>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  root: { position: "relative", height: 80, width: 96 },
  input: {
    textAlign: "center",
    verticalAlign: "center",
    width: 96
  },
  buttonOverlay: { overflow: "hidden" }
})

export default React.forwardRef(TimeInput)
