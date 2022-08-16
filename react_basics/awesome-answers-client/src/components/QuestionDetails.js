

function QuestionDetails(props) {
  return(
    <>
      <h2>{props.title}</h2>
      <p>
        {props.body}
        <br />
      </p>
      <p>
        <small>
          Seen {props.view_count} times
          |
          Created: {props.created_at ? props.created_at.toLocaleString() : null}
        </small>
      </p>
    </>
  )
}

export default QuestionDetails;
