"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/button";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  };

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 flex min-h-screen flex-col items-center justify-between pt-10 pb-2">
      <h1 className="text-2xl ">Welcome to Recipes App</h1>
      <div className="flex w-3/4 justify-between">
        <div className="text-left w-2/5">
          <p>
            This is a pet-project developed in order to complete a test
            assignment.{" "}
          </p>
          <p>
            Only authorized users are allowed to perform CRUD Operations. Please
            register or log in to use this App.
          </p>
        </div>
        <p className="text-left w-2/5">
          BackEnd API of the project is placed on free instance web-service.{" "}
          <br />
          It could be spinned down with inactivity, so you may probably wait for
          first loading more then usually.
        </p>
      </div>

      <div className="max-w-3xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Button
          title="Register"
          onClick={() => handleClick("user/signup")}
          disabled={isLoggedIn}
        />
        <Button
          title="Log In"
          onClick={() => handleClick("user/signin")}
          disabled={isLoggedIn}
        />
        <Button
          title="Log Out"
          onClick={() => console.log("clicked")}
          disabled={!isLoggedIn}
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-6xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div
          onClick={() => setExpanded(!expanded)}
          className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Description{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <div
            className={`m-0  ${expanded ? "h-30" : "h-10"} text-sm opacity-70 `}
          >
            <p>The aim of the assignment is to create recipes</p>
            <p className={expanded ? "" : "truncate"}>
              sharing platform that allows users to create, view, and search for
              recipes. Also users can search for recipes based on ingredient,
              category or title. In addition, users are able to view list of own
              recipes and add/remove any recipes to the favorite list.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/OleksandrKochenko/evvent-ta-recipes-frontend"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            FrontEnd code{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0  text-sm opacity-70`}>
            Review code for this App on GitHub repository
          </p>
        </a>

        <a
          href="https://github.com/OleksandrKochenko/evvent-ta-recipes"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            BackEnd API code{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0  text-sm opacity-70`}>
            The server and API for this project is developed in a parallel
            BackEnd project.
          </p>
        </a>
      </div>
    </main>
  );
}
