import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute({isAuth: isAuth, component: Component,})