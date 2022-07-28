import { useCounter, useFetch } from "../hooks/index.js";



export const MultipleCustomHooks = () => {
  const {counter, increment} = useCounter(1);
  
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  // console.log({ data, isLoading, hasError });
  
  const {author, quote} = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
        <h2>Counter Value = {counter}</h2>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer mt-1">{author}</footer>
        </blockquote>
      )}

        <button 
          className="btn btn-primary"
          onClick={() => increment()}
          disabled={isLoading}
        >
          Next Quote
        </button>

    </>
  );
};
