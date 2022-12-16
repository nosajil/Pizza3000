import React from 'react'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
// import OrderedPizzas from './components/OrderedPizzas'
import PizzaList from './components/PizzasList'

const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App/>} />
            {/* :id est la synthaxe pour avoir des valeurs variables dans l'url. ces valeurs seront stockées dans un paramètre portant le même nom */}
            <Route path="/pizzas" element={<PizzaList/>} />
            {/* Si aucune route ne correspond à ce qui est spécifié dans l'url on utilise une route "par défaut" */}
            <Route element={<NotFound/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default Root