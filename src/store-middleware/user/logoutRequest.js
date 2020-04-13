import {auth} from 'src/firebase'
import {logoutSuccess} from 'src/actions/user'

export default async function({dispatch}, {payload}) {
  try {
    await auth().signOut()
    dispatch(logoutSuccess())
    if(typeof payload.callback === 'function') payload.callback()

  } catch (error) {
    // dispatch(loginError(error.message))
    console.log(error.message)
  }
}
