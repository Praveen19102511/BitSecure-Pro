import * as React from 'react';
import { styled } from "@mui/material/styles";
import Homepage from "./Pages/HomePage";
import "./App.css";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppContainer = styled('div')(({ theme }) => 
({ 
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
}));

function App() {
  return (
    <BrowserRouter>
       <AppContainer>
         <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
          <Route path="*" element={<NotFound />} /> {/* Add a NotFound component for unmatched routes */}
        </Routes>
        </AppContainer>
       </BrowserRouter>
  );
}

export default App;