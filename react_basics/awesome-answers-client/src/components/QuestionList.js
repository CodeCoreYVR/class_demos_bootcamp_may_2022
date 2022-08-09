import QuestionDetails from "./QuestionDetails";

export default function QuestionList(props) {
  return(
    <>
      {props.list.map((q, i)=> {
        return <QuestionDetails
          key={i}
          title={q.title}
          body={q.body}
          author={q.author}
          created_at={q.created_at}
        />
      })}
    </>
  )
}