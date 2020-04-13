import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ConnectState from 'src/store/connect-state'
import {DispatchContext} from 'src/context'
import {Button, Text, Image} from 'react-native'
import {Input, View, KeyboardAvoidingView, Loading} from 'components'
import {registerRequest} from 'src/actions/user'
import {clearRegisterError} from 'src/actions/errors'

const ErrorMessage = styled(Text)`
  color: red;
  margin-bottom: 8px;
`

const Register = ({navigation, error}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [feedBack, setFeedBack] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    if (error) {
      dispatch(clearRegisterError())
    }
    if (feedBack) {
      setFeedBack('')
    }
  }, [email, password])

  useEffect(() => {
    if (error) {
      setFeedBack(error)
    }
  }, [error])

  const handleSubmit = () => {
    if (email && password) {
      setLoading(true)
      dispatch(
        registerRequest({
          data: {
            email,
            password,
          },
          callback: () => {
            setLoading(false)
            navigation.navigate('Home')
          },
        }),
      )
    } else {
      setFeedBack('Please fill in both fields')
    }
  }

  return (
    <KeyboardAvoidingView>
      <View style={{flex: 1, padding: 15}}>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('src/assets/images/instagram_text.png')}
            style={{width: 200, height: 60}}
          />
        </View>
        <View style={{flex: 0.2}}>
          <Input
            placeholder={'Email'}
            onChangeText={value => setEmail(value)}
            autoCompleteType="email"
            value={email}
            clearButtonMode="while-editing"
          />
          <Input
            placeholder={'Password'}
            onChangeText={value => setPassword(value)}
            autoCompleteType="password"
            value={password}
            secureTextEntry
          />
          {feedBack ? <ErrorMessage>{feedBack}</ErrorMessage> : null}
          <View style={{marginTop: 10}}>
            <Button title={'Register'} onPress={handleSubmit} />
          </View>
        </View>
        <Loading isLoading={loading} />
      </View>
    </KeyboardAvoidingView>
  )
}

const RegisterState = props => (
  <ConnectState
    selectors={[{name: 'error', path: state => state.errors.user}]}
    props={props}>
    <Register />
  </ConnectState>
)
export default RegisterState
