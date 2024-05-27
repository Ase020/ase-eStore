"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import React from "react";
enum Mode {
  Login = "Login",
  Register = "Register",
  ResetPassword = "ResetPassword",
  EmailVerification = "EmailVerification",
}

function Login() {
  const wixClient = useWixClient();

  const [mode, setMode] = React.useState(Mode.Login);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailCode, setEmailCode] = React.useState("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const formTitle =
    mode === Mode.Login
      ? "Log in"
      : mode === Mode.Register
      ? "Register"
      : mode === Mode.ResetPassword
      ? "Reset Your Password"
      : "Verify Your Email";

  const buttonTitle =
    mode === Mode.Login
      ? "Login"
      : mode === Mode.Register
      ? "Register"
      : mode === Mode.ResetPassword
      ? "Reset"
      : "Verify";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    let response;

    try {
      switch (mode) {
        case Mode.Login:
          response = await wixClient.auth.login({
            email,
            password,
          });
          break;
        case Mode.Register:
          response = await wixClient.auth.register({
            email,
            password,
            profile: { nickname: username },
          });
          break;
        case Mode.ResetPassword:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            window.location.href
          );
          break;
        case Mode.EmailVerification:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode,
          });
          break;

        default:
          break;
      }

      console.log("response: ", response);

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setMessage("Successful! You are being redirected.");
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("Error: ", error);
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-padding h-[calc(100vh-80px)] flex-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">{formTitle}</h1>

        {mode === Mode.Register ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="johnDoe"
              className="ring-2 ring-gray-300 rounded-md py-2 px-4"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        ) : null}

        {mode !== Mode.EmailVerification ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@mail.com"
              className="ring-2 ring-gray-300 rounded-md px-4 py-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label htmlFor="emailCode" className="text-sm text-gray-700">
              Verification Code
            </label>
            <input
              type="text"
              name="emailCode"
              placeholder="Code"
              className="ring-2 ring-gray-300 rounded-md px-4 py-2"
              onChange={(e) => setEmailCode(e.target.value)}
            />
          </div>
        )}

        {mode === Mode.Login || mode === Mode.Register ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="**********"
              className="ring-2 ring-gray-300 rounded-md px-4 py-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : null}

        {mode === Mode.Login && (
          <p
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(Mode.ResetPassword)}
            role="button"
          >
            Forgot password?
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-red-primary text-white py-2 px-4 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button>

        {error && <p className="text-red-500">{error}</p>}

        {mode === Mode.Login && (
          <span
            className="text-sm underline cursor-pointer"
            role="button"
            onClick={() => setMode(Mode.Register)}
          >
            Don&apos;t have an account? Register here
          </span>
        )}

        {mode === Mode.Register && (
          <span
            className="text-sm underline cursor-pointer"
            role="button"
            onClick={() => setMode(Mode.Login)}
          >
            Already have an account? Log in
          </span>
        )}

        {mode === Mode.ResetPassword && (
          <span
            className="text-sm underline cursor-pointer"
            role="button"
            onClick={() => setMode(Mode.Login)}
          >
            Go back to Login
          </span>
        )}

        {message && <p className="text-sm text-green-600">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
