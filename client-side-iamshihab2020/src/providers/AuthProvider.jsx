import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

import app from "../firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password, displayName, photoURL) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName,
        photoURL,
      });

      console.log("User created:", user);
      return user;
    } catch (error) {
      console.error("Erro7890kl mmr creating user:", error.code, error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        const loggedInUser = result.user;
        console.log("Logged In User:", loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.error(
          "Error signing in with Google:",
          error.code,
          error.message
        );
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Observing Current User\n\n", currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const updateUserProfile = async (displayName, photoURL) => {
    setLoading(true);
    try {
      if (user) {
        await updateProfile(user, { displayName, photoURL });
        console.log("User profile updated successfully");
      } else {
        console.error("No user is currently logged in");
      }
    } catch (error) {
      console.error("Error updating user profile:", error.code, error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.error(
          "Error signing in with GitHub:",
          error.code,
          error.message
        );
      });
  };
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUserProfile,
    handleGoogleSignIn,
    handleGithubSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
