import React, { useState } from 'react'
import { useContext } from 'react';

export const LevelContext = React.createContext();

export const useLevel = () => useContext(LevelContext);
