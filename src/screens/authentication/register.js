import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ConnectState from 'src/store/connect-state'
import {DispatchContext} from 'src/context'
import {View, Button, Text, Image} from 'react-native'
import {Input} from 'components'
import {registerRequest} from 'src/actions/user'
import {clearRegisterError} from 'src/actions/errors'

const Container = styled(View)`
  padding: 15px;
`

const ErrorMessage = styled(Text)`
  color: red;
  margin-bottom: 8px;
`

const Register = ({error}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    if (error) {
      dispatch(clearRegisterError())
    }
  }, [email, password])

  const handleSubmit = () => {
    dispatch(
      registerRequest({
        data: {
          email,
          password,
        },
        callback: data => console.log('Success: ', data),
      }),
    )
  }

  return (
    <Container>
      <View style={{alignItems: 'center', marginVertical: 15}}>
        <Image
          source={require('src/assets/images/instagram-logo.png')}
          style={{width: 128, height: 128, aspectRatio: 1}}
        />
      </View>
      <View>
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
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </View>
      <View>
        <Button title={'Register'} onPress={handleSubmit} />
      </View>
    </Container>
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
