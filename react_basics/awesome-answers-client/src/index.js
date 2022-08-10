import React from 'react';
import ReactDOM from 'react-dom/client';
import QuestionShowPage from './components/QuestionShowPage';
// import QuestionList from "./components/QuestionList";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import QuestionIndexPage from "./components/QuestionIndexPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// root.render(
//   <QuestionShowPage/>
// )

// root.render(
//   <QuestionList
//     list={
//       [
//         {title: "What's your fav color?", body: "RED, YELLOW, BLUE", created_at: "2020-10-10", author: {full_name: "John"} },
//         {title: "What are you up to?", body: "Coding React", created_at: "2023-10-10", author: {full_name: "Bob"} },
//         {title: "What is this?", body: "A react app", created_at: "2021-13-15", author: {full_name: "Matt"} },
//       ]
//     }
//   />
// )

root.render(
    <QuestionIndexPage
      list={
        [
          {title: "What's your fav color?", body: "RED, YELLOW, BLUE", created_at: "2020-10-10", author: {full_name: "John"} },
          {title: "What are you up to?", body: "Coding React", created_at: "2023-10-10", author: {full_name: "Bob"} },
          {title: "What is this?", body: "A react app", created_at: "2021-13-15", author: {full_name: "Matt"} },
        ]
      }
    />
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
