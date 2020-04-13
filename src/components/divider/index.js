import React from 'react'
import PropTypes from 'prop-types'

import {View, StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'

const Divider = ({title, dividerStyles, titleStyles}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.line, ...dividerStyles}}>
        {title ? (
          <View style={styles.titleContainer}>
            <Text style={{...styles.title, ...titleStyles}}>{title}</Text>
          </View>
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  line: {
    position: 'relative',
    width: '100%',
    height: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  titleContainer: {
    maxWidth: '80%',      
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    flexWrap: 'wrap'
  },
})

Divider.protoType = {
  title: PropTypes.string,
  dividerStyles: PropTypes.object,
  titleStyles: PropTypes.object,
}

Divider.defaultProps = {
  title: '',
  dividerStyles: {},
  titleStyles: {},
}

export default Divider
