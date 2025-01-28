import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "bootstrap/dist/css/bootstrap.css"

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { Button } from 'react-bootstrap'


const firebaseConfig = {
  apiKey: "AIzaSyAdvU9v4X8LF8y1E8-QWLOfqK5NWZv7rJU",
  authDomain: "test-project-2d71d.firebaseapp.com",
  projectId: "test-project-2d71d",
  storageBucket: "test-project-2d71d.firebasestorage.app",
  messagingSenderId: "645583960307",
  appId: "1:645583960307:web:39f2780443225c82099f86",
  measurementId: "G-FMKT6KY0WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  const [pageCount, setPageCount] = useState(0)


  function LogButtonPress(givenString: string) {
    logEvent(analytics, "page_view", { page_title: "buttonEvent" + givenString })
  }

  function NextPage() {
    setPageCount(pageCount + 1);
  }

  function PreviousPage() {
    setPageCount(pageCount - 1);
  }


  function RenderPages() {
    if (pageCount === 0) {
      return Page_StartingPage();
    }
    else if (pageCount === 1) {
      return Page_Page1();
    }
    else if (pageCount === 2) {
      return Page_Page2();
    }
    else if (pageCount === 3) {
      return Page_Page3();
    }
    else if (pageCount === 4) {
      return Page_Page4();
    }
    else {
      return Page_EndPage();
    }
  }

  function Page_StartingPage() {
    return (<div style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "25px",
    }}>
      <h1 style={{ color: "lightgray" }}>Testing Event Funnels</h1>
      <Button
        onClick={() => { NextPage() }}
        style={{ backgroundColor: "lightgreen", color: "black", width: "85%" }}>Press to Start the Test</Button>
    </div>)
  }

  function Page_Page1() {
    return (<div style={{
      backgroundColor: "darkred",
      height: "85vh",
      width: "50cqw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "25px",
    }}>
      <h1 style={{ color: "lightgray" }}>Page 1</h1>
      <Button
        onClick={() => { NextPage(), LogButtonPress("event-1"); }}
        style={{ backgroundColor: "lightgreen", color: "black", width: "85%", }}>Press to Log Event 1 and Continue</Button>
      <Button
        onClick={() => { NextPage() }}
        style={{ backgroundColor: "lightblue", color: "black", width: "85%", }}>Press to Continue with No Event Logged</Button>

      <Button
        onClick={() => { PreviousPage() }}
        style={{ backgroundColor: "pink", color: "black", width: "85%", }}>Press to Return to Previous Page</Button>
    </div>)
  }
  function Page_Page2() {
    return (<div style={{
      backgroundColor: "darkgreen",
      height: "85vh",
      width: "50cqw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "25px",
    }}>
      <h1 style={{ color: "lightgray" }}>Page 2</h1>
      <Button
        onClick={() => { NextPage(), LogButtonPress("event-2"); }}
        style={{ backgroundColor: "lightgreen", color: "black", width: "85%", }}>Press to Log Event 2 and Continue</Button>
      <Button
        onClick={() => { NextPage() }}
        style={{ backgroundColor: "lightblue", color: "black", width: "85%", }}>Press to Continue with No Event Logged</Button>
      <Button
        onClick={() => { PreviousPage() }}
        style={{ backgroundColor: "pink", color: "black", width: "85%", }}>Press to Return to Previous Page</Button>
    </div>)
  }

  function Page_Page3() {
    return (<div style={{
      backgroundColor: "darkblue",
      height: "85vh",
      width: "50cqw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "25px",
    }}>
      <h1 style={{ color: "lightgray" }}>Page 3</h1>
      <Button
        onClick={() => { NextPage(), LogButtonPress("event-3"); }}
        style={{ backgroundColor: "lightgreen", color: "black", width: "85%", }}>Press to Log Event 3 and Continue</Button>
      <Button
        onClick={() => { NextPage() }}
        style={{ backgroundColor: "lightblue", color: "black", width: "85%", }}>Press to Continue with No Event Logged</Button>
      <Button
        onClick={() => { PreviousPage() }}
        style={{ backgroundColor: "pink", color: "black", width: "85%", }}>Press to Return to Previous Page</Button>
    </div>)
  }

  function Page_Page4() {
    return (<div style={{
      backgroundColor: "darkgoldenrod",
      height: "85vh",
      width: "50cqw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "25px",
    }}>
      <h1 style={{ color: "lightgray" }}>Page 4</h1>
      <Button
        onClick={() => { NextPage(), LogButtonPress("event-4"); }}
        style={{ backgroundColor: "lightgreen", color: "black", width: "85%", }}>Press to Log Event 4 and Continue</Button>
      <Button
        onClick={() => { NextPage() }}
        style={{ backgroundColor: "lightblue", color: "black", width: "85%", }}>Press to Continue with No Event Logged</Button>
      <Button
        onClick={() => { PreviousPage() }}
        style={{ backgroundColor: "pink", color: "black", width: "85%", }}>Press to Return to Previous Page</Button>
    </div>)
  }

  function Page_EndPage() {
    return (<div style={{
      backgroundColor: "#e7ded6",
      height: "85vh",
      width: "50cqw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "25px",
    }}>
      <h3 style={{ color: "black" }}>Sensor sweep came back negative, MechWarrior!</h3>

      <img

        style={{ height: "50%" }}
        src={"/9266d9e80b133d6b24e901c4da29ab4f.gif"} >

      </img>
      <h5 style={{ color: "black" }}>Return to base...</h5>
      <Button
        onClick={() => { PreviousPage() }}
        style={{ backgroundColor: "darkred", color: "white", width: "85%", }}>Press to Return to Previous Page</Button>
    </div>)
  }

  return (
    RenderPages()
  )
}

export default App
