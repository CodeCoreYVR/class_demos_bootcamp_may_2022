const AnswerDetails = (props) => {
  const {body, author_name, created_at, deleteTheAnswer} = props
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
      <button onClick={deleteTheAnswer}>Delete</button>
    </div>
  )
}

export default AnswerDetails