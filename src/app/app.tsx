import type { AppProps } from "next/app";
import { AppProvider } from "./app-provider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-publishable-key-here");

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
    </AppProvider>
  );
}
