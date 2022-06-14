import './App.css';
import CreateAnimal from './components/createAnimal/CreateAnimal';
import ListAnimals from './components/listAnimal/listAnimals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RecordDetails from './components/RecordDetails/RecordDetails';
import EditAnimal from './components/EditAnimal/EditAnimal';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={ <ListAnimals />}></Route>
          <Route path='/New' element={<CreateAnimal />}></Route>
          <Route path='/findAnimal/:id'  element={<RecordDetails />} />
          <Route path='/update/:id'  element={<EditAnimal />} />
        </Routes>   
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
