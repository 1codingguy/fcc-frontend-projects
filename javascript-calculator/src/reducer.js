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
    return defaultState
  }

  // use story 8 & 10
  if (action.type === 'numbers') {
    // if there's an answer from previous calculation, press a num should display that num only (except 0)
    if (state.answer && !state.lastIsOperator && !state.hasNegativeNumber) {
      const newChunk = action.payload.value === '0' ? true : false
      return {
        ...defaultState,
        isNewChunk: newChunk,
        currentNumber: action.payload.value,
        displayFormula: action.payload.value,
      }
    }

    // }
    // leading zero problem
    // if it's a new chunk and the input is 0
    if (state.isNewChunk && action.payload.value === '0') {
      // if previous answer is NaN or Infinity, return to default state
      if (
        isNaN(state.answer) ||
        state.answer === Number.POSITIVE_INFINITY ||
        state.answer === Number.NEGATIVE_INFINITY
      ) {
        return defaultState
      }

      // console.log("running block A ");
      const display = state.displayFormula ? state.displayFormula : '0'

      return {
        ...state,
        isNewChunk: true,
        currentNumber: '0',
        displayFormula: display,
        lastIsOperator: false,
      }
    }

    // if it's a new chunk, input is not '0', the answer is NaN or Infinity, get rid of the NaN or Infinity value by setting answer to ''
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
        answer: '',
      }
    }

    // if it's a new chunk and the input is not 0
    if (state.isNewChunk) {
      // console.log("running block B ");
      let display
      if (state.displayFormula === '0') {
        display = action.payload.value
      } else if (state.displayFormula) {
        display = state.displayFormula + action.payload.value
      } else {
        display = action.payload.value
      }
      // if current number is a decimal number
      const newCurrentNumber =
        state.currentNumber === '0.'
          ? state.currentNumber + action.payload.value
          : action.payload.value
      return {
        ...state,
        isNewChunk: false,
        currentNumber: newCurrentNumber,
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
    // convert "X" to "*" for multiply
    const symbol = action.payload.id === 'multiply' ? '*' : action.payload.value
    // console.log(symbol);

    // if answer is NaN or Infinity, pressed an operator right afterwards
    if (
      isNaN(state.answer) ||
      state.answer === Number.POSITIVE_INFINITY ||
      state.answer === Number.NEGATIVE_INFINITY
    ) {
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

    // press decimal when the answer if NaN or Infinity
    if (
      state.isNewChunk &&
      (isNaN(state.answer) ||
        state.answer === Number.POSITIVE_INFINITY ||
        state.answer === Number.NEGATIVE_INFINITY)
    ) {
      return {
        ...state,
        chunkHasDecimal: true,
        currentNumber: '0.',
        displayFormula: '0.',
        isNewChunk: false,
        lastIsOperator: false,
        answer: '',
      }
    }

    let newCurrentNumber
    let display

    // if there is an answer, press decimal right after previous answer
    if (state.answer && !state.lastIsOperator) {
      return {
        ...state,
        displayFormula: '0.',
        currentNumber: '0.',
        answer: '',
        chunkHasDecimal: true,
        isNewChunk: false,
      }
    }

    if (state.isNewChunk) {
      // add leading zero if "." is pressed before any number
      // console.log('add front zero padding')
      newCurrentNumber = '0.'
      if (state.displayFormula === null || state.displayFormula === '0') {
        display = '0.'
      } else {
        // add padding zero for new chunk
        display = state.displayFormula + '0.'
      }
    } else {
      // console.log('add decimal after entering some digits')
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

    if (
      // answer is NaN or Infinity, press equals right after
      isNaN(state.answer) ||
      state.answer === Number.POSITIVE_INFINITY ||
      state.answer === Number.NEGATIVE_INFINITY ||
      // press equals before inputting anything
      state.displayFormula === null ||
      // in a -ve num bracket, not yet entered a valid num and pressed equals
      (state.isNewChunk && state.hasNegativeNumber) ||
      // pressed equals when the last entry is an operator but not a valid num
      state.lastIsOperator ||
      // press equals right after calculating an answer
      (state.answer && state.isNewChunk)
    ) {
      return { ...state }
    }

    // close the bracket for negative number
    if (state.hasNegativeNumber) {
      toEvaluate = state.displayFormula + ')'
    }

    // if the last input is "0", add "0" to the end of formula since that "0" is not part of display formula yet
    if (state.currentNumber === '0') {
      toEvaluate = state.displayFormula + '0'
    }

    // console.log(toEvaluate)
    const answer = eval(toEvaluate)
    // console.log(answer)

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
