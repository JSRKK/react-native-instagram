import React, {useState, useEffect, useContext} from 'react'
import _ from 'lodash'

import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform
} from 'react-native'
import FastImage from 'react-native-fast-image'
import CameraRoll from '@react-native-community/cameraroll'
import {DispatchContext} from 'src/context'
import {setCurrentPhoto} from 'src/actions/story'

const Gallery = () => {
  const [photos, setPhotos] = useState([])
  const [photo, setPhoto] = useState()
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    permissionRequest()
  }, [])

  const permissionRequest = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission Explanation',
          message: 'ReactNativeForYou would like to access your photos!'
        }
      )
      if (result !== 'granted') {
        console.log('Access to pictures was denied')
        return
      }
      
      getCameraRoll()
    }
  }

  const getCameraRoll = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos'
    })
      .then(({edges}) => {
        if (!_.isEmpty(edges)) {
          setPhoto(edges[0])
          setPhotos(edges)
          dispatch(setCurrentPhoto(edges[0]))
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleOnPress = data => {
    setPhoto(data)
    dispatch(setCurrentPhoto(data))
  }

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.6}}>
        {!_.isEmpty(photo) ? (
          <Image
            source={{uri: photo.node.image.uri}}
            style={{width: '100%', height: '100%'}}
          />
        ) : (
          <Image
            source={require('assets/images/no_image.png')}
            style={{width: '100%', height: '100%'}}
          />
        )}
      </View>
      <View
        style={{
          flex: 0.4
        }}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            {photos.map((data, index) => (
              <TouchableOpacity key={index} onPress={() => handleOnPress(data)}>
                <FastImage
                  style={{width: 86, height: 86, margin: 2}}
                  source={{
                    uri: data.node.image.uri,
                    headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Gallery
