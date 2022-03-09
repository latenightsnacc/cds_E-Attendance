import { useReducer } from "react";

let user = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).user : "";

let auth = localStorage.getItem("currentUser")