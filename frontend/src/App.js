import Header from "./components/header";
import Footer from "./components/footer"

import MainPage from "./pages/mainPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import PersonPage from "./pages/personPage";

import {Container} from "react-bootstrap"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
  return (
    <Router>
        <Header/>
            {/*中间 进行页面跳转 : 如果用户登录了就跳转到另一个界面*/}
            <Container className="text-center py-4">
                <Routes>
                    <Route path='/' element={<MainPage/>} exact />
                    <Route path='/login' element={<LoginPage/>}></Route>
                    <Route path='/register' element={<RegisterPage/>}></Route>
                    <Route path='/person' element={<PersonPage/>}></Route>
                </Routes>
            </Container>
        <Footer/>
    </Router>
  );
}

export default App;
