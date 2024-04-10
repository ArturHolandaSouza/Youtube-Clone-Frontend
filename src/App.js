import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import Login from "./pages/login";

function App() {

  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div style={{width: '100%',display:'flex'}}>
          <Menu/>
          <div style={{width: '100%',padding: "50px 70px",boxSizing: "border-box"}}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/library' element={<Library />} />
              <Route path='/history' element={<History />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

// Deixar a tela de login no padrão
// Implementar sozinho um drop-down menu a partir do ícone do usuário
// Criar tela e integração para cadastro do usuário
// Criar tela e integração para cadastro do vídeo
// Implementação de pesquisa

export default App;
