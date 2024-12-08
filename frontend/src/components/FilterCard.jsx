import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import React, { useEffect, useState } from "react";
import { combineSlices } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Banglore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  { filterType: "Salary", array: ["0-40k", "42-1lakh", "1lakh to 5lakh"] },
];

export const FilterCard = () => {

const [selectedvalue,  setSelectedValue] = useState('');
const dispatch = useDispatch();
const changeHandler = (value)=> {
  setSelectedValue(value);
 }
 useEffect(()=>{
 dispatch(setSearchedQuery(selectedvalue));
 },[selectedvalue]);
  return (
    <div
      className="w-full bg-white  p-3 rounded-medium"
      style={{
        marginTop: "70px",
        padding: "40px",
      }}
    >
      <h1 className="text-lg font-bold text-gray-700 mt-5 mb-3">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup  value={selectedvalue} onValueChange={changeHandler}   className="space-y-4">
        {filterData.map((data, index) => (
          <div>
            <h1 className="text-lg font-bold text-gray-700 mt-5 mb-3">
              {data.filterType}
            </h1>

            {data.array.map((item, idx) => {
              const itemId =`r${index}-${idx}`



              return (
                <div className="flex item-center space-x-2 my-2 ">
                  <RadioGroupItem  className="cursor-pointer appearance-none w-4 h-4 border-2 border-gray-400 rounded-full checked:bg-blue-500 checked:bg-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all " value={item} id={itemId} />
                  <Label htmlFor={itemId} >{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
