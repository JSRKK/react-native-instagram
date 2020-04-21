import {usersCollection} from 'src/firebase'
import {fetchUserListsSuccess} from 'src/actions/search'
import {fetchUserListsError} from 'src/actions/errors'
import {userLists} from './mockUserLists'

export default async function({dispatch}, {payload}) {
  try {
    // const doc = await usersCollection.doc(payload.id).get()
    // const {email, photoURL} = doc.data()

    // const user = Object.assign(
    //   {userId: doc.id},
    //   {
    //     email,
    //     photoURL,
    //   },
    // )
    if (payload.data) {
      let response = userLists.filter(
        data =>
          data.username
            .toLocaleLowerCase()
            .includes(payload.data.query.toLocaleLowerCase()) ||
          data.fullName
            .toLocaleLowerCase()
            .includes(payload.data.query.toLocaleLowerCase())
      )
      dispatch(fetchUserListsSuccess(response))
    }

    if (typeof payload.callback === 'function') payload.callback()
  } catch (error) {
    dispatch(fetchUserListsError(error.message))
  }
}
