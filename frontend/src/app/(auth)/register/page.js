"use client";
import React from "react";
import AnimatedLogo from "../_components/AnimatedLogo";
import Link from "next/link";
import { HOME_PAGE, LOGIN_PAGE } from "@/constants/routes";
import PasswordInputField from "../_components/PasswordInputField";
import { useForm } from "react-hook-form";
import { RegisterApi } from "@/api/auth";
import { useRouter } from "next/navigation";
import { toast , Bounce} from "react-toastify";
const RegisterPage = () => {
  //use forms
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //use Router
  const router = useRouter();

  //submit
  const submitForm = async (data) => {
    try {
      console.log("reached submitForm");
      const response = await RegisterApi(data);
      console.log(response);
      router.push(HOME_PAGE);
    } catch (error) {
      toast.error(error.response?.data, {
        autoClose: 1200,
        transition: Bounce,
        theme: "dark",
      });
      console.log(error.response);
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
                Create an account
              </h1>
              <form
                onSubmit={handleSubmit(submitForm)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    autoComplete="firstName"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:bg-gray-600 dark:focus:border-blue-500"
                    placeholder="First Name"
                  />
                  <p className="text-sm text-red-500 h-2 mt-1">
                    {errors.firstName?.message}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="middleName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Middle Name
                    <span className="text-gray-400 ml-2">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="middleName"
                    autoComplete="middleName"
                    {...register("middleName", {})}
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:bg-gray-600 dark:focus:border-blue-500"
                    placeholder="Middle Name"
                  />
                  <p className="text-sm text-red-500 h-2 mt-1">
                    {errors.middleName?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    autoComplete="lastName"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    className="bg-gray-50 border  border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:bg-gray-600 dark:focus:border-blue-500"
                    placeholder="Last Name"
                  />
                  <p className="text-sm text-red-500 h-2 mt-1">
                    {errors.lastName?.message}
                  </p>
                </div>
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
                    for="password"
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
                </div>
                <div>
                  <label
                    for="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <PasswordInputField
                    id="confirmPassword"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      minLength: {
                        value: 6,
                        message: "Password length must be greater than 6",
                      },
                    })}
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href={LOGIN_PAGE}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
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

export default RegisterPage;
