import React from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {TextInput} from 'react-native'

const CustomInput = styled(TextInput)`
  background-color: #fcfcfc;
  border: 1px solid #efefef;
  border-radius: 4px;
  margin-bottom: 8px;
  padding-left: 7px;
  padding-right: 7px;
  ${props => props.error && css`
    border: 1px solid red;
    margin-bottom: 4px;  
  `}
`

const ErrorMessage = styled(Text)`
    color: red;
    margin-bottom: 4px;
`

const Input = props => {
  return (
    <View>
      <CustomInput {...props} multiline={false}/>
      {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
    </View>
  )
}

Input.protoType ={
    error: PropTypes.string
}

Input.defaultProps = {
    error: ''
}
export default Input
