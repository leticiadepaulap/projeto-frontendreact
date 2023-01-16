import './App.css';
import CardProdutos from './Components/Product/CardProduct'
import Card from './Components/Product/Card';
import Filter from './Components/Filter/index';
import { useState } from 'react';
import Header from './Components/Header/Header';




function App() {
const [Cardprodutos] = useState(CardProdutos)
const [query,setQuery] = useState("")
const [minPrice, setMinPrice] = useState(-Infinity)
const [maxPrice, setMaxPrice] = useState(Infinity)
const [order, setOrder] = useState ("asc")

  return ( <>
  <Header/>
  <Filter
    query = {query}
    setQuery = {setQuery} 
    minPrice = {minPrice}
    setMinPrice = {setMinPrice}
    setMaxPrice = {setMaxPrice}
    maxPrice = {maxPrice}
    setOrder = {setOrder}
  />
    
    {Cardprodutos
     .filter(cardItem => 
       cardItem.title.includes(query)
    )
    .filter(cardItem => 
      cardItem.value >= minPrice
   )
   .filter(cardItem => 
    cardItem.value <= maxPrice || maxPrice ==="")
    .sort(() => {
      if (order === "asc") {
        return 0
      } else {
      return -1
      }
})
     .map(cardItem => (
        <Card
          key={cardItem.id}
          title={cardItem.title}
          imageUrl = {cardItem.imageUrl}
          value={cardItem.value}
        />
      ))}
   
   </>

  )};

export default App;
