import { useEffect, useState} from 'react'
import appFirebase from '../../credentials'
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { getStorage, ref, deleteObject } from 'firebase/storage'

const Document = () => {

    const db = getFirestore(appFirebase)
    const storage = getStorage(appFirebase)

    const [ list, setList ] = useState([])


    const getList = async() => {
      try {
        const querySnapshot = await getDocs(collection(db, "documents"))
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push({...doc.data(), id: doc.id})
        })
        setList(docs);
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(() => {    
      getList();    
    },[])
  
    const query = () => {
      console.log("Intentando hacer la query")
    }
    
  
    const deleteDocument = async (id, name) => {
      try {
        // Eliminar el documento en Firestore
        await deleteDoc(doc(db, 'documents', id));
        await deletePdf(name);
      } catch (error) {
        console.error('Error al eliminar el documento:', error);
      }
    };
    
  
    const deletePdf = async(name) => {
      console.log("la ruta es: ", name)
      try {  
        // Eliminar el archivo en Firebase Storage
        let referencia = `${name}.pdf`
        const fileRef = ref(storage, referencia);
        await deleteObject(fileRef);
      } catch (error) {
        console.error('Error al eliminar el documento:', error);
      }
    }
  
    return (
      <div className='card card-body bg-black text-light'>
        <div className="overflow-x-auto">
          <table className='"table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Estándar</th>
                <th scope='col'>Servicio</th>
                <th scope='col'>Documento</th>
                <th scope='col'>Archivo</th>
                <th scope='col'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {list.map((list) => (
                <tr key={list.id}>
                  <td>{list.standar}</td>
                  <td>{list.service}</td>
                  <td>{list.name}</td>
                  <td>
                  <a href={list.file} target="_blank" rel="noopener noreferrer">
                      Ver PDF {list.file}
                    </a>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={() => deleteDocument(list.id, list.file)}>Eliminar</button>                 
                  </td>
                </tr>  
              ))}
            </tbody>
          </table>
        
        <div>
        <button className='btn btn-dark mt-3 form-control' onClick={() => query()}>Query</button> 
        </div>
        </div>
  
      </div>
    )
}

export { Document }
