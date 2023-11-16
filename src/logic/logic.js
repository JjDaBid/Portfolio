import appFirebase from '../credentials'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc,  } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject  } from 'firebase/storage'
import Swal from 'sweetalert2'

const db = getFirestore(appFirebase)
const storage = getStorage(appFirebase)

let urlFileDesc;


// Guardar Documentos
const saveInfo = async (e) => {
  e.preventDefault();
  const standar = e.target.standar.value;
  const service = e.target.service.value;
  const name = e.target.name.value;
  const newDocument = {
    standar: standar,
    service: service,
    name: name,
    file: urlFileDesc,
  };

  try {
    await addDoc(collection(db, 'documents'), {
      ...newDocument,
    });

    Swal.fire({
      title:'Guardado', 
      text:'El documento ha sido guardado con éxito.', 
      icon:'success',
      color: 'black',
      confirmButtonColor: '#FE001B', 
    });    

    e.target.standar.value = '';
    e.target.service.value = '';
    e.target.name.value = '';
    e.target.file.value = '';
  } catch (error) {
    console.log(error);
 
    Swal.fire('Error', 'Ha ocurrido un error al guardar el documento.', 'error');
  }
};

// Cargar el documento 
const fileHandler = async (e) => {
    // detecting file
    const filePDF = e.target.files[0];
    // send file to the storage
    const refFile = ref(storage, `documents/${filePDF.name}` )
    await uploadBytes(refFile, filePDF)
    // get URL
    urlFileDesc = await getDownloadURL(refFile)
}


const getList = async() => {
  try {
  const querySnapshot = await getDocs(collection(db, "documents"))
  const docs = []
  querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id})
  })
  return docs;
  } catch (error) {
  console.log(error)
  }
}


// Eliminar el documento
const deleteDocument = async (id, name) => {
  try {
    // Mostrar un mensaje de confirmación
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el documento de forma permanente.',
      icon: 'warning',
      showCancelButton: true,
      color: 'black',
      confirmButtonText: 'Sí, eliminar',
      confirmButtonColor: '#FE001B',      
      cancelButtonText: 'Cancelar',
      customClass: {
        container: 'custom-alert-container', // Clase personalizada para el contenedor de la alerta
      },
    });

    if (result.isConfirmed) {
      // Eliminar el documento en Firestore
      await deleteDoc(doc(db, 'documents', id));
      await deletePdf(name);
      
      // Mostrar un mensaje de éxito
      Swal.fire({
        title:'Eliminado', 
        text:'El documento ha sido eliminado con éxito.', 
        icon:'success',
        confirmButtonColor: '#FE001B',  
      });
    }
  } catch (error) {
    console.error('Error al eliminar el documento:', error);
    Swal.fire('Error', 'Ha ocurrido un error al eliminar el documento.', 'error');
  }
};

  const deletePdf = async(name) => {    
    try {  
      // Delete the file in Firebase Storage
      let referencia = `${name}.pdf`
      const fileRef = ref(storage, referencia);
      await deleteObject(fileRef);
    } catch (error) {
      console.error('Error al eliminar el documento:', error);
    }
  }

  
export { saveInfo, fileHandler, deleteDocument, deletePdf, getList }