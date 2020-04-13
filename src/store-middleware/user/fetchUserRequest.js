import {usersCollection} from 'src/firebase'
import {fetchUserSuccess} from 'src/actions/user'
import {fetchUserError} from 'src/actions/errors'

export default async function({dispatch}, {payload}) {
  try {
    const doc = await usersCollection.doc(payload.id).get()
    const {email, photoURL} = doc.data()

    const user = Object.assign(
      {userId: doc.id},
      {
        email,
        photoURL,
      },
    )

    dispatch(fetchUserSuccess(user))
    if (typeof payload.callback === 'function') payload.callback()

  } catch (error) {
    dispatch(fetchUserError(error.message))
  }
}
