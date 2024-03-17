 import React, {useEffect, useState} from 'react';
 import './App.scss';

 let quoteDBUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
 
 
 function App() {
  const [quote, setQuote] = useState("Life is 10% of what happens to me and 90% of how i deal with it")
  const [author, setAuthor] = useState("Charles Swindoll");
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArray, setQuotesArray] = useState (null)

  const fetchQuotes = async (url) => {
  const response = await fetch(url)
  const parsedJSON = await response.json()
  setQuotesArray(parsedJSON.quotes)
  console.log(parsedJSON)
  }
    useEffect(() => {
     fetchQuotes(quoteDBUrl)
    }, [quoteDBUrl])
    
    
  
  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setRandomNumber(randomInteger)
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
    }

  return (
    <div className = "App">
      <header className = "App-header">
        <div id="quote-box">
         <p id="text">"{quote}"</p>
          
         <p id="author">- {author}</p> 
         
         <button id = "new-quote" onClick={() => getRandomQuote()}>Generate A Random Quote</button>
         <br></br>
         <a id = "tweet-quote" href={'http://www.twitter.com/intent/tweet?text=hello'}>Tweet Quote</a>
      </div>
    </header>  
        
  </div>
  ); 
 } 
         
       
     
  
   

export default App;
