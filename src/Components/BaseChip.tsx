import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/Colors'

interface Props {
    text: string,
}

const BaseChip = ({ text }: Props) => {
  return (
    <View style={[ styles.root ]}>
      <Text style={[ styles.text]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        borderRadius: 10,
        height: 30,
        backgroundColor: colors.chip,
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        alignSelf: 'flex-start',
        paddingHorizontal: 10
    },
    text: {
        color : colors.black
    }
})
export default BaseChip