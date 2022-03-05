import { createContext, useContext, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

const 