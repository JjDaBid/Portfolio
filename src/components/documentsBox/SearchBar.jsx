  const SearchBar = ({
    // eslint-disable-next-line react/prop-types
    searchValue, setSearchValue
  }) => {

  const written = (e) =>{
    setSearchValue(e.target.value)
  }

  return (
    <div className='card card-body bg-black lg:mx-40'>     
        <input 
          className='form-control mt-1 bg-secondary text-light' 
          placeholder="Realiza tu busqueda" 
          value={searchValue} 
          onChange={written}/>
    </div>
  )
}

export { SearchBar }