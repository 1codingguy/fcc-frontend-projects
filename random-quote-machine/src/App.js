import { useEffect, useState } from "react";
import getData from "./getData";
import colors from "./colors";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    // getData().then((data) => {
    //   setQuotes(data.quotes);
    // });

    const quotes = getData().then((data) => data.quotes);
    console.log(quotes)
  }, []);

  const getRandomNum = (n) => {
    return Math.floor(Math.random() * n);
  };

  const handleClick = () => {
    const newQuoteIndex = getRandomNum(quotes.length);
    const newColorIndex = getRandomNum(colors.length);
    setQuoteIndex(newQuoteIndex);
    setColorIndex(newColorIndex);
  };

  if (quotes.length > 0) {
    return (
      <div
        className="background"
        style={{ backgroundColor: colors[colorIndex] }}
      >
        <div className="container">
          <div id="quote-box">
            <div className="quote-text" style={{ color: colors[colorIndex] }}>
              <i className="fa fa-quote-left"></i>
              <span> </span>
              <span id="text"> {quotes[quoteIndex].quote}</span>
            </div>

            <div className="quote-author" style={{ color: colors[colorIndex] }}>
              <p id="author">
                <span>- </span>
                {quotes[quoteIndex].author}
              </p>
            </div>

            <div className="button-container">
              <div className="button-left-group">
                <a
                  href="https://twitter.com/intent/tweet"
                  target="_blank"
                  id="tweet-quote"
                  className="social-icons"
                  style={{ backgroundColor: colors[colorIndex] }}
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="https://www.tumblr.com/"
                  target="_blank"
                  id="tumblr"
                  className="social-icons"
                  style={{ backgroundColor: colors[colorIndex] }}
                >
                  <i className="fa fa-tumblr"></i>
                </a>
              </div>
              <button
                id="new-quote"
                style={{ backgroundColor: colors[colorIndex] }}
                onClick={handleClick}
              >
                New quote
              </button>
            </div>
          </div>
          <div className="footer">
            by
            <a href="https://github.com/1codingguy"> coding-guy</a>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default App;
