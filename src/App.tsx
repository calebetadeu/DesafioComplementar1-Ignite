
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MovieContextProvider } from './contexts/ApiContexts';


export function App() {
  return(
 <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MovieContextProvider>
        <SideBar />
        <Content />   
      </MovieContextProvider>  
    </div>
  )
}