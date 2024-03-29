import { Link } from "react-router-dom";

const AnswerDetails = (props) => {
  const {body, author_name, created_at, deleteTheAnswer} = props
  return(
    <div>
      <p>
        {body}
        <br />
        -> {author_name}
      </p>
      <p>
        <small>Answered: {created_at.toLocaleString()}</small>
      </p>
      <button onClick={deleteTheAnswer}>Delete</button>
      <Link to={`/gift/${props.id}`}>Gift this user</Link>
    </div>
  )
}

export default AnswerDetails
