import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {View} from 'react-native'
import {Text} from 'react-native-elements'

const Container = styled(View)`
  width: 100%;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`

const Line = styled(View)`
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-width: 0.5px;
  border-color: #e5e5e5;
`

const WrapTitle = styled(View)`
  max-width: 80%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`

const Title = styled(Text)`
  flex: wrap;
`

const Divider = ({title, dividerStyles, titleStyles}) => {
  return (
    <Container>
      <Line style={dividerStyles}>
        {title ? (
          <WrapTitle>
            <Title style={titleStyles}>{title}</Title>
          </WrapTitle>
        ) : null}
      </Line>
    </Container>
  )
}

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
