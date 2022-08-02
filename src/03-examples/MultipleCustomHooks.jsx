import { useCounter, useFetch } from "../hooks/index.js";
import { BBQuote } from "./BBQuote.jsx";
import { LoadingQuote } from "./LoadingQuote.jsx";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // console.log({ data, isLoading, hasError });

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      <h2>Counter Value = {counter}</h2>
      <hr />

      {
        isLoading 
          ? <LoadingQuote /> 
          : <BBQuote author={author} quote={quote}/>
      }

      <button
        className="btn btn-primary"
        onClick={() => increment()}
        disabled={isLoading}>
        Next Quote
      </button>
    </>
  );
};
