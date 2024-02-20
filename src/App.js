import "./App.css";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import Logo from "./Logo.js";
import Texts from "./Texts.js";
import Footer from "./Footer.js";

function App() {
  var currentTime = new Date();
  let time = currentTime.getHours();

  return (
    <div>
      {time <= 6 || time >= 18 ? (
        <body class="night">
          <Header />
          <Logo />
          <SearchBar />
          <Texts />
        </body>
      ) : (
        <body class="day">
          <Header />
          <Logo />
          <SearchBar />
          <Texts />
        </body>
      )}
    </div>
  );
}

export default App;
