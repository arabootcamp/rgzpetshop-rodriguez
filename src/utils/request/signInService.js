import { app } from "../../firebase/config";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

const signInService = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      accessToken: userCredential.user.accessToken,
      email: userCredential.user.email,
    };
    return {
      status: "ok",
      user,
    };
  } catch (error) {
    return {
      status: "fail",
      error: {
        code: error.code,
        messagge: error.message,
      },
    };
  }
};

const checkSignInService = async () => {
  let res;
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        res = user.email;
        // ...
      } else {
        // User is signed out
        // ...
        res = "";
      }
    });
  } catch (error) {
    res = "";
  }
console.log(res)
  return res;
};

const signOutService = async () => {
  let isOkSignOut;
  try {
    await signOut(auth);
    isOkSignOut = true;
  } catch (error) {
    isOkSignOut = false;
  }
  return isOkSignOut;
};

export { signInService, checkSignInService, signOutService };
