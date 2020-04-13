import React from 'react'
import PropTypes from 'prop-types'
import {Overlay} from 'react-native-elements'
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native'

const Loading = ({isLoading}) => {
  return (
    <Overlay isVisible={isLoading} height={80}>
      <View style={styles.container}>
        <ActivityIndicator size="small" color="gray" />
        <Text>Loading...</Text>
      </View>
    </Overlay>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

Loading.protoType = {
  isLoading: PropTypes.bool,
}

Loading.defaultProps = {
  isLoading: false,
}

export default Loading
