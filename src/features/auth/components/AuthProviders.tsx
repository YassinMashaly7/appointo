import React, { Fragment } from "react";
import AppleProviderButton from "./AppleProviderButton";
import GoogleProviderButton from "./GoogleProviderButton";

export default function AuthProviders() {
  const authProviders = [
    {
      name: "Google",
      component: <GoogleProviderButton />,
    },
    {
      name: "Apple",
      component: <AppleProviderButton />,
    },
  ];

  return (
    <div className="flex w-full items-center gap-2">
      {authProviders.map((provider) => (
        <Fragment key={provider.name}>{provider.component}</Fragment>
      ))}
    </div>
  );
}
