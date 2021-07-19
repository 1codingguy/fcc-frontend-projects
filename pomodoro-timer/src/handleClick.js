// working handleClick function with flaw
const handleClick = () => {
  console.log("running handleClick");

  if (whatIsCounting === "Session") {
    if (sessionIsActive) {
      // if sessionIsActive (clock running), pause the clock
      console.log("running sessionIsActive block");
      clearInterval(sessionRef.current);
    }
    if (!sessionIsActive) {
      console.log("sessionIsActive if false, running else block");
      // if not sessionIsActive, run the clock
      //  call getFinishTime with remainingSession
      // finishTime is to calc the future stop point for the counter, shouldn't change unless the counter is paused

      console.log(remainingSession.min, remainingSession.sec);
      let finishTime = getFinishTime(
        remainingSession.min,
        remainingSession.sec
      );
      // console.log(finishTime);

      // set interval should exclude running finishTime otherwise the finish point keeps moving

      sessionRef.current = setInterval(() => {
        const { minutes, seconds } = getRemainingTime(finishTime);
        setRemainingSession({ min: format(minutes), sec: format(seconds) });
      }, 1000);
    }
    // not sure where to put this line after expanding function
    setSessionIsActive(!sessionIsActive);
  }
  if (whatIsCounting === "Break") {
    if (breakIsActive) {
      clearInterval(breakRef.current);
    }
    if (!breakIsActive) {
      console.log("breakIsActive if false, running else block");

      console.log(remainingBreak.min, remainingBreak.sec);
      let finishTime = getFinishTime(remainingBreak.min, remainingBreak.sec);

      breakRef.current = setInterval(() => {
        const { minutes, seconds } = getRemainingTime(finishTime);
        setRemainingBreak({ min: format(minutes), sec: format(seconds) });
      }, 1000);
    }
    setBreakIsActive(!breakIsActive);
  }
};
