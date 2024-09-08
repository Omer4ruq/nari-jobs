import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "@/firebase/firebase.config";

const Login = () => {
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  function submitHandler() {}

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div>
      <div>
        <div className="flex items-center justify-center max-w-7xl mx-auto">
          <form
            onSubmit={submitHandler}
            className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
          >
            <h1 className="font-bold text-xl mb-5">Login</h1>
            <div className="my-2">
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="my-2">
              <Label>Password</Label>
              <Input type="password" name="password" placeholder="password" />
            </div>
            <div className="flex items-center justify-between">
              <RadioGroup className="flex items-center gap-4 my-5">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full my-4">
              Login
            </Button>
            <Button
              type="submit"
              className="w-full my-4"
              onClick={handleGoogleLogin}
            >
              Google Login
            </Button>

            <span className="text-sm">
              Dont have an account?{" "}
              <Link to="/signup" className="text-blue-600">
                Signup
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
