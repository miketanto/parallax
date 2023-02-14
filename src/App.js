import {useState} from 'react'
import Header from './components/Header/Header.tsx';
import {ref as dbRef, set, push } from "firebase/database";
import { getStorage, ref, uploadBytes} from "firebase/storage";
import { storage,db } from './utils/firebase';
import { ParallaxProvider } from 'react-scroll-parallax';
import logo from './logo.svg';
import styles from './App.module.scss'
import ContainerWrapper from './components/ContainerWrapper/ContainerWrapper.tsx';
import LeftContainer from './components/LeftContainer/LeftContainer.tsx';
import RightContainer from './components/Right Container/RightContainer.tsx';

function App() {
  const [file, setFile] = useState()
  const [name,setName] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
    setName(event.target.files[0].name)
  }

  async function createMemory(){
    if(name && file && title && date && description){
      await createMemoryImage().then(()=>{
        const memoriesListRef = dbRef(db, 'memories');
        const newPostRef = push(memoriesListRef);
        set(newPostRef,{
          title: title,
          description: description,
          date: date,
          image_url: `gs://parallax-a2a85.appspot.com/public/${name}`
        });
        console.log("Finished DB Creation")
      })
    }else{
      console.log("Incomplete Data")
    }
  }
  async function createMemoryImage (){
    if(name && file){ 
      console.log('Uploading...')
      const imageRef = ref(storage, `${name}`);
  
      // Create a reference to 'images/mountains.jpg'
      const folderImagesRef = ref(storage, `public/${name}`);
  
      uploadBytes(folderImagesRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
    }
    else console.log("No Content");
  }

  return (
    <ParallaxProvider>
    <div className={styles.app}>
      <Header/>
      <ContainerWrapper>
        <div></div>
        <LeftContainer/>
        <RightContainer/>
        <LeftContainer/>
        <RightContainer/>
        <LeftContainer/>
        <RightContainer/>
      </ContainerWrapper>
      <div className={styles.footer}>
        <div className = {styles.title}>Add More Memories</div>
        <div className = {styles.imageAdd}>
          <input accept="image/*"  type="file" onChange={handleChange} />
          <div className = {styles.descriptionWrapper}>
            <div>
            <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
            <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <div>
            <input type="date" onChange = {(e)=>setDate(e.target.value)}/>
            </div>
          </div>
          </div>
        <div 
        className = {styles.addButton}
        onClick = {createMemory}
        >
          Add Memory
        </div>
      </div>
    </div>
    </ParallaxProvider>
  );
}

export default App;
