
export const BBQuote = (props) => {
  
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{props.quote}</p>
      <footer className="blockquote-footer mt-1">{props.author}</footer>
    </blockquote>
  )
}
