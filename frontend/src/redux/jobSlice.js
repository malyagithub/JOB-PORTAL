import { createSlice } from "@reduxjs/toolkit";
import {  React } from "react";

const jobSlice = createSlice({
    name:"job",
    initialState :{
        allJobs :[],
        allAdminJobs :[],
        singleJob :null,
        searchJobByText :"",
        allAppliedjobs:[],
        searchedQuery :"",

    },
    reducers:{
        setAllJobs :(state,action)=>{
            state.allJobs = action.payload;

        },
        setSingleJob :(state,action)=> {
            state.singleJob = action.payload;
        },
        setAllAdminJobs:(state,action) =>{
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText :(state,action)=>{
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs : (state,action)=>{
            state.allAppliedjobs =action.payload;
        },
        setSearchedQuery :(state,action) =>{
            state.searchedQuery = action.payload;
        }
    }
});
export const {setAllJobs , setSingleJob,setAllAdminJobs,setSearchJobByText,setAllAppliedJobs,setSearchedQuery} =  jobSlice.actions;
export default jobSlice.reducer ; 