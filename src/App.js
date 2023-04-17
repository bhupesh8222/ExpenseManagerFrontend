import React, { useState, useMemo } from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);


  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <Router>
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/income' element={<Income />} />
              <Route path='/expense' element={<Expenses />} />
            </Routes>
            {/* {displayData()} */}
          </main>
        </MainLayout>
      </Router>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex:1;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
  }
`;

export default App;
