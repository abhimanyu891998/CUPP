import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { dimens, colors, customFonts } from '../constants'
import { Icon } from '../Components'
import { PropTypes } from 'prop-types'

const LogoPlaceholder = (props) => {
  const{
    iconSize,
    iconMargin,
    accent,
    size
  } = props

  const fontStyle = {
    color: accent,
    fontSize: size,
    fontFamily: customFonts.bold,
    marginRight: 4,
    marginLeft: 4
  }

  const componenet =
    <View style={props.containerStyle}>
      <View style={styles.logoContainer}>
        <Text style={fontStyle}>C</Text>
        <Icon style={{marginTop: iconMargin}} nameAndroid='md-leaf-outline' nameIOS='ios-leaf' color={accent} size={iconSize} />
        <Text style={fontStyle}>nts</Text>
      </View>

    </View>

  return componenet
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row'
  }
})

LogoPlaceholder.propTypes = {
  style: PropTypes.object
}

export default LogoPlaceholder

