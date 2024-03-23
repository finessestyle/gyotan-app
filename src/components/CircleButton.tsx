import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: string
}

const CircleButton = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467fD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#0000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    textShadowOffset: { width: 0, height: 8 },
    elevation: 6
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48
  }
})

export default CircleButton
