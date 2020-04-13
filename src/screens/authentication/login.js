import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'

import {Text, Image, TouchableWithoutFeedback} from 'react-native'
import {Button} from 'react-native-elements'
import {KeyboardAvoidingView, View, Input, Divider, Loading} from 'components'

import {DispatchContext} from 'src/context'
import ConnectState from 'src/store/connect-state'
import {loginRequest} from 'src/actions/user'
import {clearLoginError} from 'src/actions/errors'

const ErrorMessage = styled(Text)`
  color: red;
  margin-bottom: 8px;
`

const Login = ({navigation, error}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [feedBack, setFeedBack] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    if (error) {
      dispatch(clearLoginError())
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
        loginRequest({
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
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <KeyboardAvoidingView>
        <View style={{flex: 0.8, padding: 30}}>
          <View
            style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('src/assets/images/instagram_text.png')}
              style={{width: 200, height: 60}}
            />
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: '100%',
              }}>
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
              <View style={{width: '100%', marginTop: 10}}>
                <Button title={'Login'} onPress={handleSubmit} />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text>Forgot your password?</Text>
              <Divider title={'OR'} />
            </View>
            <View style={{width: '100%', marginTop: 10}}>
              <Button
                title={'Log in as facebook'}
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View
        style={{
          flex: 0.2,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Register')}>
          <View
            style={{
              height: 50,
              backgroundColor: '#ffffff',
              borderTopColor: '#efefef',
              borderWidth: 2,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#B3B3B3'}}>
              Already have account?{' '}
              <Text style={{fontWeight: 'bold', color: '#335189'}}>
                Sign up.
              </Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Loading isLoading={loading} />
    </View>
  )
}

const LoginState = props => (
  <ConnectState
    selectors={[{name: 'error', path: state => state.errors.user}]}
    props={props}>
    <Login />
  </ConnectState>
)

export default LoginState
