// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Alert from "./components/Alert";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import RBNavBar from "./components/RBNavBar";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("");
  const [history, setHistory] = useState([""]);
  const [hpointer, setHPointer] = useState(-1);
  const [message, setMessage] = useState('');
  const [msgType, setMsgType] = useState('');
  // const [msgArr,setMsgArr] = useState([]);
  // const [theme, setTheme] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   border: "1px solid white",
  // });
  // const [themeState, setThemeState] = useState("Enable Dark Mode");
  // document.body.style.backgroundColor = "#042743";
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      handleAlert('Dark Mode Enabled!', 'success')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      handleAlert('Light Mode Enabled!', 'success')
    }
  };
  const lavenderMode = () => {
    // if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "#4e4e86";
    handleAlert('Lavender Mode Enabled!', 'success')
    document.querySelectorAll('input[type="checkbox"]').forEach(e => e.checked = 1);
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   handleAlert('Light Mode Enabled!', 'success')
    // }
  };
  const greenMode = () => {
    // if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "#035956";
    handleAlert('Green Mode Enabled!', 'success')
    document.querySelectorAll('input[type="checkbox"]').forEach(e => e.checked = 1);
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   handleAlert('Light Mode Enabled!', 'success')
    // }
  };
  const grayMode = () => {
    // if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "#404040";
    handleAlert('Gray Mode Enabled!', 'success')
    document.querySelectorAll('input[type="checkbox"]').forEach(e => e.checked = 1);
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    //   handleAlert('Light Mode Enabled!', 'success')
    // }
  };
  // const handleTheme = () => {
  //   if (theme.color === "black") {
  //     setTheme({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setThemeState("Enable Light Mode");
  //   } else {
  //     setTheme({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setThemeState("Enable Dark Mode");
  //   }
  // };
  const remover = (data, arr) => {
    // console.log(text);
    setTimeout(() => {
      console.log(data, arr);
      let b = arr.indexOf(data);
      console.log("index:-", b)
      let a = arr;
      console.log("remove array:- ", a);
      a.splice(b, 1);
      setMsgArr(a);
    }, 2000);

  }
  // var anum=0;
  const handleAlert = (msg, type) => {
    setMsgType(type);
    setMessage(msg);
    // let a=[...msgArr];
    // a.push({msg:msg,type:type});
    // console.log("A:- ",a,a.length);
    // let b=a;
    // setMsgArr(a);
    // let num = anum;
    // let mesg=msg
    // let typee=type;
    // let b=[...msgArr];
    // console.log("B:- ",b);
    // setTimeout((msg,type)=>{
    // remover({msg:mesg,type:typee},b);
    // },2000);
    // anum+=1;
    setTimeout(() => {
      setMessage(null);
    }, 1500)
  }
  const handleUpper = () => {
    let a = text.toUpperCase();
    let h = [...history];
    h.push(a);
    setHistory(h);
    setHPointer(hpointer + 1);
    console.log(history, hpointer);
    setText(a);
    handleAlert('Text Converted to UpperCase!', 'success');
  };
  const handleLower = () => {
    let a = text.toLowerCase();
    let h = [...history];
    h.push(a);
    setHistory(h);
    setHPointer(hpointer + 1);
    setText(a);
    handleAlert('Text Converted to LowerCase!', 'success')
  };
  const handleUndo = () => {
    // let l = history.length;
    // console.log(history);
    // console.log(hpointer === -1);
    console.log("hp before:-", hpointer);
    if (hpointer === -1) {
      console.log("stopped");
      return "stopped";
    } else {
      let x = history.length - 1;
      if (hpointer >= x) {
        setHPointer(x - 1);
      }
      if (hpointer > 0) {
        setHPointer(hpointer - 1);
      }
      console.log(history, hpointer);
      console.log(history[hpointer]);
      setText(history[hpointer]);
    }

    handleAlert('Text Undoed! (' + history[hpointer] + ')', 'success')
  };
  const handleRedo = () => {
    console.log("hp before:-", hpointer);
    if (hpointer >= history.length) {
      console.log("stopped");
      return "stopped";
    } else {
      if (hpointer <= -1) {
        setHPointer(0);
      }
      console.log("hpointer before:-", hpointer);
      if (hpointer < history.length - 1) {
        let j = hpointer + 1;
        setHPointer(j);
      }
      console.log("hpointer after +1:-", hpointer);
      console.log(history, hpointer);
      console.log(history[hpointer]);
      setText(history[hpointer]);
    }

    handleAlert('Text Redoed! (' + history[hpointer] + ')', 'success')
  };
  const handleClear = () => {
    let h = [...history];
    h.push("");
    setHistory(h);
    setHPointer(hpointer + 1);
    setText("");

    handleAlert('Text Cleared!', 'success')
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    handleAlert('Text Copied!', 'success')
  };
  const handleChange = (event) => {
    let h = [...history];
    h.push(event.target.value);
    setHistory(h);
    setHPointer(hpointer + 1);
    // setHPointer(-1);
    let a = event.target.value;
    setText(a);
  };
  return (
    <>
      <BrowserRouter>
        {/* <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} lavenderMode={lavenderMode} greenMode={greenMode} grayMode={grayMode} /> */}
        <RBNavBar title="TextUtils" mode={mode} toggleMode={toggleMode} lavenderMode={lavenderMode} greenMode={greenMode} grayMode={grayMode} />
        {/* <br /> */}
        <div style={{ height: "60px", marginTop: "10px" }}>
          <Alert msg={message} type={msgType} />
        </div>
        <Routes>
          <Route path='/' element={<TextForm
            heading="Enter your text to analyze"
            text={text}
            onUpper={handleUpper}
            onLower={handleLower}
            onChange={handleChange}
            onUndo={handleUndo}
            onRedo={handleRedo}
            onClear={handleClear}
            onCopy={handleCopy}
            mode={mode}
          />} />
          <Route path='/about' element={<About mode={mode} themeState={mode} handleTheme={setMode} />} />
        </Routes>
      </BrowserRouter>
      {/* <About theme={theme} themeState={themeState} handleTheme={handleTheme} /> */}
    </>
  );
}

export default App;
