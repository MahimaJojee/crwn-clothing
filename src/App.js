import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route } from "react-router-dom";

const HatsPage = (props) =>{
  console.log(props)
  return (
    <div>
      <h1>Hey you are at the hats page!</h1>
      {/* {console.log(`${props.match.url}and${props.linkUrl}`)} */}
    </div>
  )
}
function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shops" component={ShopPage}/>
    </div>
  );
}

export default App;
