import '../css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
  // const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <div className='TodoSearch-content'>
      <input className='TodoSearch' placeholder="Escribe tus tareas" onChange={onSearchValueChange} value={searchValue}/>
    </div>
  )
}

export  {TodoSearch}
