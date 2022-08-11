const AnswerDetails = (props) => {
  const {body, author_name, created_at} = props
  return(
    <div>
      <p>
        {body}
        <br />
        By {author_name}
      </p>
      <p>
        Answered {created_at}
      </p>
      <button onClick={props.deleteAnswer}>Delete</button>
    </div>
  )
}

export default AnswerDetails