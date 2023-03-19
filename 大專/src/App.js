// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/index.css';
import Home from './components/home.js';
import Login from './components/login.js';
import MemberBar from './components/memberbar.js';
import Story from './story/story.js';
import Report from './story/report.js';
import News from './news/news.js';
import Product from './product/product.js';
import Menu from './menu/menu.js';
import MTSerious from './menu/MTSerious.js';
import TSerious from './menu/TSerious.js';
import TTSerious from './menu/TTSerious.js';
import Order from './order/order.js';
import Store from './store/store.js';
import LoginCreat from './components/logincreat.js';
import Contact from './contact/contact.js';
import OderdirnkID from './components/orderlist_billAll.js';
//---郁的---
import DrinkInfo from './order/drinkInfo.js';
import GoOrder from './order/goOrder.js';
import DrinkList from './order/drinkList.js';
import AddDrink from './order/AddDrink.js';
import BillList from './order/billList.js';
import BillAll from './order/billAll.js';
import FullJo from './order/fullJo.js'
import TeamJo from './order/teamJo.js'
import FriendJo from './order/friendJo.js'
//--渼涵---
import ProductIntro from './product/product_intro.js';
import ProductStep1 from './product/product_cart.js';
import ProductStep2 from './product/product_info.js';
import ProductStep3 from './product/product_check.js';
import ProductHistory from './product/product_history.js';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/story" component={Story} exact />
          <Route path="/story/report" component={Report} exact />
          <Route path="/news" component={News} exact />
          <Route path="/product" component={Product} exact />
          <Route path="/menu" component={Menu} exact />
          <Route path="/menu/MTSerious" component={MTSerious} exact />
          <Route path="/menu/TSerious" component={TSerious} exact />
          <Route path="/menu/TTSerious" component={TTSerious} exact />
          <Route path="/order" component={Order} exact />
          <Route path="/store" component={Store} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/member/creat" component={LoginCreat} exact />
          <Route path="/member/:id" component={MemberBar} exact />
          <Route path="/member/:id/:id" component={MemberBar} exact />
          <Route path="/order" component={Order} exact />
          <Route path="/order/drinkInfo" component={DrinkInfo} exact />
          <Route path="/order/goOrder" component={GoOrder} exact />
          <Route path="/order/drinkList" component={DrinkList} exact />
          <Route path="/order/billList" component={BillList} exact />
          <Route path="/order/AddDrink" component={AddDrink} exact />
          <Route path="/order/billAll" component={BillAll} exact />
          <Route path="/order/billAll/:id" component={OderdirnkID} exact />
          <Route path="/order/fullJo" component={FullJo} exact />
          <Route path="/order/teamJo" component={TeamJo} exact />
          <Route path="/order/friendJo" component={FriendJo} exact />
          
          <Route path="/product/OnePiece" component={Product} exact />
          <Route path="/product/Fumenaction" component={Product} exact />
          <Route path="/product/Godzilla" component={Product} exact />

          <Route path="/product/OnePiece/:productId" component={ProductIntro} />
          <Route path="/product/Fumenaction/:productId" component={ProductIntro} />
          <Route path="/product/Godzilla/:productId" component={ProductIntro} />
          
          <Route path="/product/step1" component={ProductStep1} />
          <Route path="/product/step2" component={ProductStep2} />
          <Route path="/product/step3" component={ProductStep3} />
          <Route path="/member/orderList/productlist/0912345678/20230101123543" component={ProductHistory} />
        </Switch></div>
    </BrowserRouter>);
}

export default App;