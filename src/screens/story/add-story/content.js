import React, {useState} from 'react'
import styled from 'styled-components'

import {Divider, TagPeople, AddLocation} from 'components'
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import {DispatchContext} from 'src/context'
import ConnectState from 'src/store/connect-state'

const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`

const WrapRow = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`

const Content = ({photo}) => {
  const [tagPeopleVisible, setTagPeopleVisible] = useState(false)
  return (
    <Container>
      <WrapRow>
        <View>
          {photo ? (
            <Image
              source={{uri: photo.node.image.uri}}
              style={{width: 86, height: 86}}
            />
          ) : null}
        </View>
        <View style={{paddingLeft: 10}}>
          <TextInput placeholder={'Write a caption...'} />
        </View>
      </WrapRow>

      <WrapRow>
        <TouchableOpacity
          style={{width: '100%'}}
          onPress={() => setTagPeopleVisible(true)}>
          <Text>Tag People</Text>
        </TouchableOpacity>
      </WrapRow>
      <Divider />
      <WrapRow>
        <TouchableOpacity style={{width: '100%'}}>
          <Text>Add Location</Text>
        </TouchableOpacity>
      </WrapRow>
      <Divider />

      <TagPeople
        isVisible={tagPeopleVisible}
        onClose={() => setTagPeopleVisible(false)}
        photo={photo.node.image.uri}
      />
      {/* <AddLocation /> */}
    </Container>
  )
}

const ContentState = props => (
  <ConnectState
    selectors={[
      {
        name: 'photo',
        path: state => state.story.photo,
      },
    ]}
    props={props}>
    <Content />
  </ConnectState>
)

export default ContentState
