/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box, Typography,
} from '@mui/material';
import language from '../config/languageGeneral';

const NotFroundView = () => {
  const navigate = useNavigate();
  return (
    <Typography sx={{ p: 4 }}>
      {language.notFound[0]}
    </Typography>
  );
};

export default NotFroundView;
