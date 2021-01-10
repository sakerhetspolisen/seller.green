import gif from './assets/karl2.gif';
import './App.css';
async function ticker() {
  var states = ["Karl Sellergren", "arl Sellergren ", "rl Sellergren  ", "l Sellergren  K",
  " Sellergren  Ka", "Sellergren  Karl", "ellergren  Karl ", "llergren  Karl S", "lergren  Karl Se",
  "ergren  Karl Sel", "rgren  Karl Sell", "gren  Karl Selle", "ren  Karl Seller", "en  Karl Sellerg",
  "n  Karl Sellergr", "  Karl Sellergre"];
  var i;
  while (true) {
    for (i = 0; i < states.length; i++) {
      document.title = states[i];
      await sleep(1000);
    } 
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
ticker()

function App() {
  return (
    <div>
      <img src={gif} alt="Karl Sellergrens office"/>
    </div>
  );
}

export default App;
