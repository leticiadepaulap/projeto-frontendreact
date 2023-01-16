import { FiltersContainer } from "./style"


export default function Filter(props) {
  return (<>


    <FiltersContainer>
      <span>
    <label> Ordernar por: </label>
    <select 
    value= {props.order}
    onChange = {(event)=> {props.setOrder((event.target.value))}}>
        <option value ={"asc"} > Crescente </option>
        <option value ={"desc"} > Decrescente </option>
    </select>  
      <input placeholder="pesquisa"
      value =  {props.query}
      onChange = {(event)=> {props.setQuery((event.target.value))}}
      />
  </span>
      <input placeholder="Preço Mínimo"
      type = "number"
      value =  {props.minPrice}
      onChange = {(event)=> {props.setMinPrice((event.target.value))}}
      />
      <input placeholder="Preço Máximo"
      type = "number"
      value =  {props.maxPrice}
      onChange = {(event)=> {props.setMaxPrice((event.target.value))}}

      />
    </FiltersContainer>
  </>
  )
}
