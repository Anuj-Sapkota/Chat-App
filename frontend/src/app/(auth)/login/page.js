"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { LoginApi } from "@/api/auth";
import { Bounce, toast } from "react-toastify";
import { EMAIL_REGEX } from "@/constants/regex";
import { useRouter } from "next/navigation";
import { HOME_PAGE, REGISTER_PAGE } from "@/constants/routes";
import Link from "next/link";
import AnimatedLogo from "../_components/AnimatedLogo";
import PasswordInputField from "../_components/PasswordInputField";

const LoginPage = () => {
  //use forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //use router
  const router = useRouter();

  //login
  const submitForm = async (data) => {
    try {
      const res = await LoginApi(data);
      console.log(res.data);
      router.push(HOME_PAGE);
    } catch (error) {
      toast.error(error.response.data, {
        autoClose: 1200,
        transition: Bounce,
        theme: "dark",
      });
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <AnimatedLogo />
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(submitForm)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: EMAIL_REGEX,
                        message: "Invalid Email!",
                      },
                    })}
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:bg-gray-600 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  <p className="text-sm text-red-500 h-2 mt-1">
                    {errors.email?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <PasswordInputField
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password length must be greater than 6",
                      },
                    })}
                  />
                  <p className="text-sm text-red-500 h-2 mt-1">
                    {errors.password?.message}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300 select-none"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <Link
                    href={REGISTER_PAGE}
                    className="font-medium ml-2 text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
