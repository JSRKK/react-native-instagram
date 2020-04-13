import React, {useEffect, useContext} from 'react'
import styled from 'styled-components'
import ConnectState from 'src/store/connect-state'
import {auth} from 'src/firebase'
import {Text, Image, TouchableWithoutFeedback} from 'react-native'
import {Button} from 'react-native-elements'
import {View, Divider} from 'components'
import {fetchUserRequest} from 'src/actions/user'
import {DispatchContext} from 'src/context'

const ButtonCustom = styled(Text)`
  font-weight: bold;
  color: #3897f1;
`

const Authentication = ({navigation}) => {
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  const onAuthStateChanged = (user) => {
    if (user) {
      dispatch(
        fetchUserRequest({
          id: user.uid,
          callback: () => navigation.navigate('Home'),
        }),
      )
    }
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.8, padding: 15}}>
        <View
          style={{flex: 0.75, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('src/assets/images/instagram_text.png')}
            style={{width: 200, height: 60}}
          />
        </View>
        <View
          style={{
            flex: 0.25,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Button
            title={'Continue as Facebook'}
            containerStyle={{width: '100%'}}
          />
          <Text>friends are using instagram</Text>
          <Divider title={'OR'} />
          <ButtonCustom onPress={() => navigation.navigate('Register')}>
            Sign up with email
          </ButtonCustom>
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
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
                Log in.
              </Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const AuthenticationState = props => (
  <ConnectState
    selectors={[{name: 'isAuthen', path: state => state.user.isAuthen}]}
    props={props}>
    <Authentication />
  </ConnectState>
)

export default AuthenticationState
