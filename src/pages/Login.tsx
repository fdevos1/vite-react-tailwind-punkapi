import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { BeersContext } from "../contexts/beersContext";

import Icon from "../components/icons/icon";
import { IBeer } from "../interfaces/beerInterface";
import BeerBox from "../components/BeerBox";
import { AuthContext } from "../contexts/authContext";

interface IBeerContext {
  randomBeer: IBeer[];
  requestRandomBeer: () => void;
}

interface IAuthContext {
  signIn: (a: string, b: string) => void;
  error: { message: string; status: number } | undefined;
}

function Login() {
  const loginValidation = yup.object({
    email: yup
      .string()
      .email("Insert a valid e-mail")
      .required("Please insert your e-mail"),
    password: yup.string().required("Please insert your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(loginValidation),
  });

  const { signIn, error } = useContext(AuthContext) as IAuthContext;

  const onSubmit = (data: { email: string; password: string }) => {
    const { email, password } = data;

    signIn(email, password);
  };

  const { randomBeer, requestRandomBeer } = useContext(
    BeersContext
  ) as IBeerContext;

  const handleRequestNewBeer = () => {
    requestRandomBeer();
  };

  return (
    <div className="flex w-full h-full items-center justify-around p-4 gap-2">
      <div className="w-full flex flex-col gap-8 lg:w-1/3">
        <div className="flex flex-col items-center">
          <Icon name="Beer" />

          <p className="text-light text-gray-800 md:text-xl">
            Discover new beers
          </p>
          <span className="text-xs text-light text-gray-800 md:text-lg">
            And learn everything about your favorite beers
          </span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <input
              placeholder="Enter your email"
              {...register("email")}
              className={`border p-2 rounded-sm ${
                errors.email || error?.message
                  ? "border-red-400  focus:outline-red-400"
                  : "hover:border-emerald-100 focus:outline-emerald-100"
              }`}
            />
            {errors.email && (
              <span className="text-sm text-red-400">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <input
              placeholder="Enter your password"
              type="password"
              {...register("password")}
              className={`border p-2 rounded-sm ${
                errors.password || error?.status
                  ? "border-red-400  focus:outline-red-400"
                  : "hover:border-emerald-100 focus:outline-emerald-100"
              }`}
            />
            {errors.password && (
              <span className="text-sm text-red-400">
                {errors.password.message}
              </span>
            )}

            {error && !errors && (
              <span className="text-sm text-red-400">{error.message}</span>
            )}
          </div>
          <div className="flex justify-between ">
            <button className="text-sm text-light text-gray-400 hover:text-emerald-300 hover:underline">
              Forgot password
            </button>
            <button className="text-sm text-light text-gray-400 hover:text-emerald-300 hover:underline">
              Create a account
            </button>
          </div>

          <button className="text-lg font-bold bg-emerald-400 text-white rounded p-2">
            Enter
          </button>
        </form>
      </div>
      <div className="w-2/6 hidden lg:flex h-full flex flex-col justify-center items-center ">
        {randomBeer?.map((beer) => (
          <BeerBox
            key={beer.id}
            imgUrl={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            description={beer.description}
            first_brewed={beer.first_brewed}
            beer_id={beer.id}
            newBeer={handleRequestNewBeer}
            isLogin
          />
        ))}

        <span className="mt-2 text-sm text-light text-gray-700">
          Login to see more information
        </span>
      </div>
    </div>
  );
}

export default Login;
