export const constants = {
  url: process.env.NODE_ENV === "development" ? "http://localhost:3001" : "",
  paymentLinks: {
    preOrder15:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_aEUbMc8ai0Ed0YEbII"
        : "",
    preOrder25:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_00g2bC0HQ86F36M7st"
        : "",
    preOrder30:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_aEU2bC76e1Ih7n2dQS"
        : "",
  },
  vimeoToken: "d191bc6f07f8cc3fa8b9d74a978dbdfe",
  clientSecret: "4IYYn0KecXO4YhtsRyNRhZiQMsst1dTSCzGSKpxcrzaSU4N8rnpLz5UiZ8MvIyditv9EGYT8/gtJsQsyZxFqwvRpZKRDgAP9sjzCfcGeRyavkUj56235lTAWLeAEzqc+",
  clientIdentifier: "393df4a78ba6a0d17e6184b4f94c300bafc90cee",
};
