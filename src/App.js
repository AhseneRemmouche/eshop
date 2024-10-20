import './App.css';
import StorefrontIcon from '@mui/icons-material/Storefront';

function App() {
  return (
    <div className="App">
      <h1>Bismi Allah</h1>
      <header className="App-header">
       <div className="header_logo"></div>
       <div className="header_search"></div>
       <div className="header_nav">
        <div className="nav_item">
          <div className="nav_itemLineOne">Salam Guest</div>
          <div className="nav_itemLineTwo">Sign In</div>
        </div>
        <div className="nav_item">
        <div className="nav_itemLineOne">Your</div>
        <div className="nav_itemLineTwo">Shop</div>
        </div>
        <div className="nav_item">
        <div className="nav_itemLineOne">Basket</div>
        <div className="nav_itemLineTwo">0</div>
        </div>
       </div>
  
      </header>
    </div>
  );
}

export default App;
