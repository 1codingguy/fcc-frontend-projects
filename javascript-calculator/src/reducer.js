export const defaultState = {
  isNewChunk: true,
  chunkHasDecimal: false,
  currentNumber: '0',
  displayFormula: null,
  lastIsOperator: false,
  answer: '',
  hasNegativeNumber: false,
}

export const reducer = (state, action) => {
  // use story 7
  if (action.type === 'clear') {
    // console.log("return to default state");
    return defaultState
  }

  // use story 8 & 10
  if (action.type === 'numbers') {
    // leading zero problem

    // deal with leading zero in 1st, initial chunk
    // if (
    //   state.isNewChunk &&
    //   action.payload.value === '0' &&
    //   state.displayFormula === '0'
    // ) {
    //   console.log('debug blog')
    //   console.log(state.displayFormula)
    //   console.log(typeof state.displayFormula)
    //   return {
    //     ...state,
    //     isNewChunk: true,
    //     currentNumber: '0',
    //     displayFormula: '0',
    //     lastIsOperator: false,
    //   }
    // }

    // if it's a new chunk and the input is 0, set the display value to "0"
    if (state.isNewChunk && action.payload.value === '0') {
      console.log('running block A ')
      const display = state.displayFormula ? state.displayFormula + '0' : '0'
      return {
        ...state,
        isNewChunk: true,
        currentNumber: '0',
        displayFormula: display,
        lastIsOperator: false,
      }
    }

    // if it's a new chunk, the answer is NaN or Infinity, get rid of the NaN or Infinity value
    if (
      state.isNewChunk &&
      (isNaN(state.answer) ||
        state.answer === Number.POSITIVE_INFINITY ||
        state.answer === Number.NEGATIVE_INFINITY)
    ) {
      return {
        ...state,
        isNewChunk: false,
        currentNumber: action.payload.value,
        displayFormula: action.payload.value,
        lastIsOperator: false,
      }
    }
    // if it's a new chunk and the input is not 0
    if (state.isNewChunk) {
      // console.log("running block B ");
      // console.log(`current number is ${state.currentNumber}`);
      const display = state.displayFormula
        ? state.displayFormula + action.payload.value
        : action.payload.value
      return {
        ...state,
        isNewChunk: false,
        currentNumber: action.payload.value,
        displayFormula: display,
        lastIsOperator: false,
      }
    } else {
      // console.log("running block C ");
      const display = state.displayFormula
        ? state.displayFormula + action.payload.value
        : action.payload.value
      const newCurrentNumber = state.lastIsOperator
        ? action.payload.value
        : state.currentNumber + action.payload.value
      return {
        ...state,
        isNewChunk: false,
        currentNumber: newCurrentNumber,
        displayFormula: display,
        lastIsOperator: false,
      }
    }
  }

  // dealing with operators input
  if (action.type === 'operators') {
    // use story 13
    // convert X to * for multiply
    const symbol = action.payload.id === 'multiply' ? '*' : action.payload.value
    // console.log(symbol);

    // if answer is NaN or Infinity, pressed an operator right afterwards
    if (
      isNaN(state.answer) ||
      state.answer === Number.POSITIVE_INFINITY ||
      state.answer === Number.NEGATIVE_INFINITY
    ) {
      console.log('last is NaN or Infinity, pressed an operator')
      return {
        ...state,
        isNewChunk: true,
        currentNumber: symbol,
        displayFormula: state.answer + symbol,
        lastIsOperator: true,
        hasNegativeNumber: false,
        chunkHasDecimal: false,
        answer: '',
      }
    }

    // exist an operator and an opened bracket, but no digit entered
    if (state.hasNegativeNumber && state.isNewChunk) {
      return {
        ...state,
        isNewChunk: true,
        currentNumber: symbol,
        displayFormula: state.displayFormula.slice(0, -3) + symbol,
        lastIsOperator: true,
        hasNegativeNumber: false,
        chunkHasDecimal: false,
      }
    }

    // close the bracket for negative number
    if (state.hasNegativeNumber) {
      // console.log("closing the bracket for negative number");
      return {
        ...state,
        isNewChunk: true,
        currentNumber: symbol,
        displayFormula: state.displayFormula + ')' + symbol,
        lastIsOperator: true,
        hasNegativeNumber: false,
        chunkHasDecimal: false,
      }
    }

    // case of entering two operators
    if (
      state.lastIsOperator &&
      action.payload.id !== 'subtract' &&
      !state.hasNegativeNumber
    ) {
      // console.log("running duplicated operator block");
      // update to the latest entered operator
      return {
        ...state,
        isNewChunk: true,
        currentNumber: symbol,
        displayFormula: state.displayFormula.slice(0, -1) + symbol,
        lastIsOperator: true,
        hasNegativeNumber: false,
        chunkHasDecimal: false,
      }
    }

    // second operator is negative number
    if (
      state.lastIsOperator &&
      action.payload.id === 'subtract' &&
      !state.hasNegativeNumber
    ) {
      // console.log("running negative number block");

      return {
        ...state,
        isNewChunk: true,
        currentNumber: symbol,
        displayFormula: state.displayFormula + '(-',
        lastIsOperator: false,
        hasNegativeNumber: true,
        chunkHasDecimal: false,
      }
    }

    // press operator before any numbers, add a padding 0 in front
    if (state.isNewChunk && !state.lastIsOperator && !state.answer) {
      // console.log("running isNewChunk block in OPERATORS");

      return {
        ...state,
        isNewChunk: true,
        currentNumber: '0' + symbol,
        displayFormula: '0' + symbol,
        lastIsOperator: true,
        chunkHasDecimal: false,
      }
    }

    // a new chunk begins and there is a stored answer
    if (state.isNewChunk && state.answer) {
      // console.log("press operator after '=' block");
      return {
        ...state,
        isNewChunk: true,
        currentNumber: symbol,
        displayFormula: state.answer + symbol,
        lastIsOperator: true,
        hasNegativeNumber: false,
        chunkHasDecimal: false,
      }
    }
    // default return, normal case, enter one operator
    // console.log("running default operator block");
    return {
      ...state,
      isNewChunk: true,
      currentNumber: symbol,
      displayFormula: state.displayFormula + symbol,
      lastIsOperator: true,
      chunkHasDecimal: false,
    }
  }

  // use story 11 - adding decimal
  if (action.type === 'decimal' && !state.chunkHasDecimal) {
    // console.log("running decimal block");

    let newCurrentNumber
    let display

    if (state.isNewChunk) {
      // add leading zero if "." is pressed before any number
      // console.log("add front zero padding");
      newCurrentNumber = '0.'
      display =
        state.displayFormula === null ? '0.' : state.displayFormula + '0.'
      // console.log(display);
    } else {
      // console.log("add decimal after entering some digits");
      newCurrentNumber = state.currentNumber + '.'
      display = state.displayFormula + '.'
    }

    return {
      ...state,
      chunkHasDecimal: true,
      currentNumber: newCurrentNumber,
      displayFormula: display,
      isNewChunk: false,
      lastIsOperator: false,
    }
  }

  // use story 9
  if (action.type === 'equals') {
    let toEvaluate = state.displayFormula

    // answer is NaN or Infinity, press equals right after
    if (
      isNaN(state.answer) ||
      state.answer === Number.POSITIVE_INFINITY ||
      state.answer === Number.NEGATIVE_INFINITY
    ) {
      return { ...state }
    }

    // press equals before inputting anything
    if (state.displayFormula === null) {
      return { ...state }
    }

    // in a -ve num bracket, not yet entered a valid num and pressed equals
    if (state.isNewChunk && state.hasNegativeNumber) {
      return { ...state }
    }

    // pressed equals when the last entry is an operator but not a valid num
    if (state.lastIsOperator) {
      return { ...state }
    }

    if (state.hasNegativeNumber) {
      // close the bracket for negative number
      toEvaluate = state.displayFormula + ')'
    }
    // console.log(toEvaluate);
    const answer = eval(toEvaluate)
    // console.log(answer);

    return {
      ...state,
      answer,
      currentNumber: answer,
      displayFormula: toEvaluate + '=' + answer,
      isNewChunk: true,
      chunkHasDecimal: false,
      lastIsOperator: false,
      hasNegativeNumber: false,
    }
  }

  // return the input state by default,
  // means if none of the conditions met, then do nothing
  return state
}
