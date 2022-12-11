import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/home';
import Labels from '../pages/Labels/labels';
import Archive from '../pages/Archive/archive';
import Trash from '../pages/Trash/trash';
import Notes from '../pages/Notes/note';
import LoginPage from '../pages/Authentication/loginpage';
import SignupPage from '../pages/Authentication/signuppage';

import MockAPI from '../components/Mockman/mock-man';
import AuthorizedRoutes from '../routes/authorizedRoutes';


function NavBarRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<AuthorizedRoutes />}>
        <Route path="/notes" element={<Notes />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
      </Route>

      <Route path="/mockman" element={<MockAPI />} />
    </Routes>
  );
}

export default NavBarRoutes;
