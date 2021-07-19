const minToMs = (min) => {
  return Number(min) * 60 * 1000;
};

const secToMs = (sec) => {
  return Number(sec) * 1000
}

// const nowInMilleseconds = () => {
//   return new Date().getTime();
// };

// rewrite to accomodate min+sec input
export const getFinishTime = (min, sec=0) => {

  const dateNow = new Date();
  // console.log(dateNow);

  const timeNow = dateNow.getTime();
  // console.log(timeNow);

  const finishTime = timeNow + minToMs(min) + secToMs(sec);
  // console.log(finishTime);

  return finishTime
};


const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
const oneSecond = 1000;

export const getRemainingTime = (finishTime) => {
  // console.log(new Date());
  const remainingMs = finishTime - new Date().getTime()
  // console.log(remainingMs)

  let minutes = Math.floor((remainingMs % oneHour) / oneMinute);
  let seconds = Math.floor((remainingMs % oneMinute) / oneSecond);

  return {minutes, seconds}
}

