import AnswerDetails from "./AnswerDetails";

export default function AnswerList(props) {
  const answers = props.list
  return(
    <div>
      <h4>Answer List</h4>
      <ul>
        {
          answers ?
          answers.map((a,i) => {
            return <AnswerDetails key={i} 
            body={a.body}
            author_name={a.author_full_name}
            created_at={a.created_at}
            deleteTheAnswer={() => props.deleteTheAnswer(a.id)}
            />
          })
          :
          null
        }
      </ul>
    </div>
  )
}
