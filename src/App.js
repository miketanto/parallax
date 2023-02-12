import Header from './components/Header/Header.tsx';
import { ParallaxProvider } from 'react-scroll-parallax';
import logo from './logo.svg';
import styles from './App.module.scss'
import ContainerWrapper from './components/ContainerWrapper/ContainerWrapper.tsx';
import LeftContainer from './components/LeftContainer/LeftContainer.tsx';
import RightContainer from './components/Right Container/RightContainer.tsx';

function App() {
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
        <div className = {styles.imageAdd}></div>
        <div className = {styles.addButton}></div>
      </div>
    </div>
    </ParallaxProvider>
  );
}

export default App;
