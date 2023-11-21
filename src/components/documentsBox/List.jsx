import { useState, useEffect } from 'react';
import { deleteDocument } from '../../logic/logic'

const List = (props) => {

  const [documentList, setDocumentList] = useState([]);

  useEffect(() => {
    setDocumentList(props.searchedDocument);
  }, [props.searchedDocument]);

  const handleDeleteDocument = async (id, file) => {
    await deleteDocument(id, file);
    const updatedDocumentList = documentList.filter((document) => document.id !== id);
    setDocumentList(updatedDocumentList);
  };

  return (
    <div className='card card-body bg-black text-light lg:mx-40'>
      <table className="table table-hover hover-danger table-bordered border-black table-secondary">
        <thead className='px-5 text-center table-dark'>
          <tr className='px-5 text-white'>
            <th scope='col'>Estándar</th>
            <th scope='col'>Servicio</th>
            <th scope='col'>Documento</th>
            <th scope='col'>Archivo</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody className='px-5 my-5 text-light'>
          {props.searchedDocument.map((list) => (
            <tr key={list.id} className="my-3">
              <td className='align-middle'>{list.standar}</td>
              <td className='align-middle'>{list.service}</td>
              <td className='align-middle text-danger'>{list.name}</td>
              <td className='align-middle text-center'>
              <a href={list.file} target="_blank" rel="noopener noreferrer">
                  Ver PDF {list.file.file}
                  <i className="fa-solid fa-eye" style={{ color: '#FE001B' }}></i>
                </a>
              </td>
              <td className='text-center align-middle'>
                <button className='btn btn-danger bg-[#FE001B] justify-content-center' onClick={() => handleDeleteDocument(list.id, list.file)}><i className="fa-solid fa-trash"></i></button> 
              </td>
            </tr>  
          ))}
        </tbody>
      </table>
    </div>
  )
}

export  { List }
