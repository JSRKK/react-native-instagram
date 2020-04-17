import React, {useState} from 'react'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view'
import Gallery from './scenes/gallery'
import Photo from './scenes/photo'
import Video from './scenes/video'

const Footer = () => {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {key: 'gallery', title: 'GALLERY'},
    {key: 'photo', title: 'PHOTO'},
    {key: 'video', title: 'VIDEO'},
  ])

  const renderScene = SceneMap({
    gallery: Gallery,
    photo: Photo,
    video: Video,
  })

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'black'}}
      style={{backgroundColor: 'white'}}
      labelStyle={{color: 'black'}}
    />
  )

  return (
    <TabView
      tabBarPosition="bottom"
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      style={{backgroundColor: '#F3F4F4'}}
    />
  )
}

export default Footer
