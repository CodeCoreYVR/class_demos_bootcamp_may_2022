import AnswerDetails from "./AnswerDetails";

export default function AnswerList(props) {
  return(
    <div>
      <h4>Answer List</h4>
      <div>
        {
          props.list.map((a, i) => {
            return <AnswerDetails
              key={i}
              body={a.body}
              author_name={a.author_name}
              created_at={a.created_at}
            />
          })
        }
      </div>
    </div>
  )
}