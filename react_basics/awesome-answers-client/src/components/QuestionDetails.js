

function QuestionDetails(props) {
  return(
    <>
      <h2>{props.title}</h2>
      <p>
        {props.body}
        <br />
        By {props.author.full_name}
      </p>
      <p>
        <small>
          Seen {props.view_count} times
          {props.created_at.toLocaleString()}
        </small>
      </p>
    </>
  )
}

export default QuestionDetails;