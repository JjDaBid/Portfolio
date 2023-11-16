import { useEffect, useState } from 'react'
import { Form, List, SearchBar, StandarTitle, ButtonList } from '../documentsBox'
import { getList } from '../../logic/logic'

const Container = () => {

    const [ list, setList ] = useState([])
    const [ searchValue, setSearchValue ] = useState("")
    const [ standards, setStandards ] = useState([])
    const [ selectedStandard, setSelectedStandard ] = useState("Todos")

    const getButtons = async() => {
        try {
            const allStandards = [ "Todos", ...new Set(list.map((document) => document.standar)) ]                      
            setStandards(allStandards)            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getButtons()
    },[list])
   
    const listView = async () => {
        const documents = await getList();
        setList(documents);
    }

    useEffect(() => {    
        listView();    
    },[])

    const searchedDocument = list.filter(
        (docu) => {
        return docu.name.includes(searchValue)
        }
    )

    const filterStandard = (standard) => {
        if(standard === "Todos"){
            console.log("Esto es all")
            listView()            
        } else {
            const filteredData = list.filter((docu) => docu.standar === standard);
            setList(filteredData);
        }
        setSelectedStandard(standard);
    }

    return (

        <>
            <div className='bg-black'>
                <Form/> 
                            
                <ButtonList
                    standards={standards}
                    filterStandard={filterStandard} />
                <SearchBar 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}                    
                />
                <StandarTitle standar={selectedStandard}/>
                <List 
                    list={list}
                    searchedDocument={searchedDocument}
                />
                
            </div>
        </>
        
    )
}

export { Container }