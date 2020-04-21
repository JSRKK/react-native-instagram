import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components/native'
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native'
import {Overlay} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import ConnectState from 'src/store/connect-state'
import {DispatchContext} from 'src/context'
import {fetchUserListsRequest, clearUserLists} from 'src/actions/search'

const Container = styled.View`
    background-color: #ffffff
`

const WrapHeader = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f7f7f7;
`
const WrapSearchIcon = styled.View`
  flex: 0.12;
  align-items: flex-end;
  justify-content: center;
`

const WrapTextInput = styled.View`
  flex: 0.76;
  justify-content: center;
  padding-left: 5px;
`

const WrapCloseIcon = styled.TouchableOpacity`
  flex: 0.12;
  align-items: center;
  justify-content: center;
`

const WrapContent = styled.View`
  padding: 0 0 15px 15px;
`

const WrapUserList = styled.TouchableOpacity`
  flex-direction: row;
  padding: 4px;
  margin-bottom: 4px;
`

const UserList = ({data, onSelect}) => {
  return (
    <WrapUserList onPress={() => onSelect(data)}>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <Image
          source={{uri: data.picture}}
          style={{width: 48, height: 48, borderRadius: 24}}
        />
      </View>
      <View style={{flex: 0.8, justifyContent: 'center'}}>
        <Text>{data.username}</Text>
        <Text style={{color: 'gray', fontSize: 12}}>{data.fullName}</Text>
      </View>
    </WrapUserList>
  )
}

const SearchModal = ({
  search,
  visible,
  setSearch,
  onCancle,
  onSelect,
  userLists
}) => {
  const [searching, setSearching] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    setSearching(true)
  }, [search])

  const handleOnSearch = () => {
    if (search.trim()) {
      setLoading(true)
      dispatch(
        fetchUserListsRequest({
          data: {query: search},
          callback: () => setLoading(false)
        })
      )
      setSearching(false)
    }
  }
  return (
    <Overlay isVisible={visible} overlayStyle={{padding: 0}} fullScreen>
      <Container>
        <WrapHeader>
          <WrapSearchIcon>
            <Icon name={'ios-search'} size={30} />
          </WrapSearchIcon>
          <WrapTextInput>
            <TextInput
              value={search}
              onChangeText={value => setSearch(value)}
              onSubmitEditing={handleOnSearch}
              returnKeyType="search"
              autoFocus
            />
          </WrapTextInput>
          <WrapCloseIcon
            onPress={() => {
              dispatch(clearUserLists())
              onCancle()
            }}>
            <Icon name={'ios-close'} size={30} />
          </WrapCloseIcon>
        </WrapHeader>
        <WrapContent>
          {search && searching ? (
            <Text style={{marginTop: 15}}>Search for {`"${search}"`}</Text>
          ) : null}
          {loading ? (
            <ActivityIndicator size="small" color="gray" />
          ) : (
            !searching && (
              <SafeAreaView>
                <FlatList
                  data={userLists}
                  renderItem={({item}) => (
                    <UserList data={item} onSelect={onSelect} />
                  )}
                  keyExtractor={item => item.id}
                />
              </SafeAreaView>
            )
          )}
        </WrapContent>
      </Container>
    </Overlay>
  )
}

const SearchModalState = props => (
  <ConnectState
    selectors={[{name: 'userLists', path: state => state.search.userLists}]}
    props={props}>
    <SearchModal />
  </ConnectState>
)

export default SearchModalState
