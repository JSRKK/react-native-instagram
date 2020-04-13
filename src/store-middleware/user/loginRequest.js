import {auth} from 'src/firebase'
import {loginError} from 'src/actions/errors'
import fetchUserRequest from './fetchUserRequest'

export default async function({state, dispatch}, {payload}) {
  try {
    const credential = await auth().signInWithEmailAndPassword(
      payload.data.email,
      payload.data.password,
    )
    fetchUserRequest(
      {state, dispatch},
      {payload: {id: credential.user.uid, callback: payload.callback}},
    )
  } catch (error) {
    dispatch(loginError(error.message))
  }
}
