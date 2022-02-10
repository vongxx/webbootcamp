// The latest version of React (version 17) introduced new JSX Transform, thus removing unused imports
// import React from 'react';
// #npm view react version
import logo from './logo.svg';
import './App.css';
import ExternalCourseList from './CourseList';

const myName = 'XX'

const myCourses = [
  {
    id:1,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmülller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"
  },
  {
    id:2,
    title: "Modern React with Redux",
    author: "Stephen Grider",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/modern-react-with-redux/"
  },
  {
    id:3,
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    author: "Andrew Mead",
    hours_video: 39,
    number_of_lectures: 200,
    rating: 4.7,
    url: "http://codingthesmartway.net/courses/complete-react-web-app-developer/"
  }
];

// When adding code to render list elements, it’s recommended to also add the key property and assign a unique value. 
// Keys help React identify which items have changed, are added, or are removed. 
// Keys should be given to the elements inside the array to give the elements a stable identify.
// Can use this functionName as a psedo-HTML element
function CourseList(){
  return myCourses.map(function(course){
    return <div key={course.id}>
             <span>
               <a href={course.url}><h4>{course.title}</h4></a>
             </span>
             <span>by <strong>{course.author}</strong></span>
             <span> | Video Hours: {course.hours_video}</span>
             <span> | Number of Lectures: {course.number_of_lectures}</span>
             <span> | Rating: {course.rating}</span>
             <br/><br/>
          </div>
  });
}


function App() {
  // Defining a variable inside a function
  const greetings = {one:'Hello', two: "World"}
  // I can define a function inside a function!! Wow!
  function getName(){return myName;}


  
  return (
    <div>
      <h1>My First React App.</h1>
      <h2>{greetings.one} {greetings.two} from {getName()}</h2>
      <hr/>
      {
        myCourses.map(function(course){
          return <div>{course.title}</div>
        })
      }
      <hr/>
      <h1>Using Function From Same File</h1>
      <CourseList />
      <hr/>
      <h1>Using Function From External File</h1>
      <ExternalCourseList courses={myCourses}/>
    </div>
  );
}

export default App;
