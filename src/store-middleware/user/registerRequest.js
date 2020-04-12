import {auth, usersCollection} from 'src/firebase'
import {registerSuccess} from 'src/actions/user'
import {registerError} from 'src/actions/errors'

export default async function({dispatch}, {payload}) {
  try {
    const credential = await auth().createUserWithEmailAndPassword(
      payload.data.email,
      payload.data.password,
    )
    // console.log(credential)

    const {user} = credential

    const newUser = {
      id: user.uid,
      email: user.email,
    }
    console.log(newUser)
    const res = await usersCollection.doc(user.uid).set(newUser, {merge: true})
    dispatch(registerSuccess(newUser))
    if (typeof payload.callback === 'function') payload.callback(newUser)
  } catch (error) {
    console.log(error)
    dispatch(
      registerError(error.message),
    )
  }
}
