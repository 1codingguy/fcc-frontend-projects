const [counting, setCounting] = useState(false);
const [whatIsCounting, setWhatIsCounting] = useState("Session");

const [breakLength, setBreakLength] = useState(defaultBreak);
const [sessionLength, setSessionLength] = useState(defaultSession);

const [remainingBreak, setRemainingBreak] = useState({
  min: format(breakLength),
  sec: `00`,
});
const [remainingSession, setRemainingSession] = useState({
  min: format(sessionLength),
  sec: `00`,
});

const decrement = (text) => {
  if (text === "Break" && breakLength > 1) {
    setBreakLength(breakLength - 1);
  }
  if (text === "Session" && sessionLength > 1) {
    setSessionLength(sessionLength - 1);
  }
};

const increment = (text) => {
  if (text === "Break" && breakLength < 60) {
    setBreakLength(breakLength + 1);
  }
  if (text === "Session" && sessionLength < 60) {
    setSessionLength(sessionLength + 1);
  }
};

const reset = () => {
  setBreakLength(defaultBreak);
  setSessionLength(defaultSession);
  clearInterval(sessionRef.current);
  clearInterval(breakRef.current);
  setRemainingSession({ min: format(sessionLength), sec: `00` });
  // setRemainingSession({min: format(0), sec: format(3)})
  setRemainingBreak({ min: format(breakLength), sec: `00` });
  // setRemainingBreak({ min: format(0), sec: format(3) });
  setWhatIsCounting("Session");
  setCounting(false);
  // audioNode.pause()
  // audioNode.currentTime = 0;
};

let sessionRef = useRef();
let breakRef = useRef();

const handleClick = () => {
  setCounting(!counting);
};

// when value of `counting` changes
useEffect(() => {
  console.log("running the counting useEffect");

  if (whatIsCounting === "Session" && counting === true) {
    console.log("now starts countdown of session");

    let finishTime = getFinishTime(remainingSession.min, remainingSession.sec);
    sessionRef.current = setInterval(() => {
      const { minutes, seconds } = getRemainingTime(finishTime);
      setRemainingSession({
        min: format(minutes),
        sec: format(seconds),
      });
    }, 1000);
  }
  if (whatIsCounting === "Session" && counting === false) {
    console.log("countdown of session stops");
    clearInterval(sessionRef.current);
  }

  if (whatIsCounting === "Break" && counting === true) {
    console.log("now starts countdown of break");

    let finishTime = getFinishTime(remainingBreak.min, remainingBreak.sec);
    breakRef.current = setInterval(() => {
      const { minutes, seconds } = getRemainingTime(finishTime);
      setRemainingBreak({
        min: format(minutes),
        sec: format(seconds),
      });
    }, 1000);
  }
  if (whatIsCounting === "Break" && counting === false) {
    console.log("countdown of break stops");
    clearInterval(breakRef.current);
  }
}, [counting, whatIsCounting]);

// check if remainingSession is 0 on every update
useEffect(() => {
  if (remainingSession.min == 0 && remainingSession.sec == 0) {
    // play audio
    // audioNode.play()
    // stop the countdown clock
    clearInterval(sessionRef.current);
    // reset countdown length
    setRemainingSession({ min: format(sessionLength), sec: `00` });
    // setRemainingSession({min: format(0), sec: format(3)})
    setWhatIsCounting("Break");
  }
}, [remainingSession]);

// check if remainingBreak is 0 on every update
useEffect(() => {
  if (remainingBreak.min == 0 && remainingBreak.sec == 0) {
    // play audio
    // audioNode.play();
    // stop the countdown clock
    clearInterval(breakRef.current);
    // reset break length
    setRemainingBreak({ min: format(breakLength), sec: `00` });
    // setRemainingBreak({ min: format(0), sec: format(3) });
    setWhatIsCounting("Session");
  }
}, [remainingBreak]);

// update remainingSession and remainingBreak after clicking on arrows
useEffect(() => {
  setRemainingSession({ min: format(sessionLength), sec: `00` });
  // setRemainingSession({min: format(0), sec: format(3)})
  setRemainingBreak({ min: format(breakLength), sec: `00` });
  // setRemainingBreak({ min: format(0), sec: format(3) });
}, [sessionLength, breakLength]);
