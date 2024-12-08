import React, { useEffect, useState } from "react";
import Navbar from "./ui/shared/Navbar";
import { FilterCard } from "./FilterCard";
import { Job } from "./Job";
import Footer from "./ui/shared/Footer";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"; 




// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  const { allJobs,searchedQuery } = useSelector((store) => store.job);

const [filterJobs,setFilterJobs] = useState(allJobs);


useEffect(() => {
  if (searchedQuery) {
    const filteredJobs = allJobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.salary.toString().includes(searchedQuery) // Adding salary filter
      );
    });
    setFilterJobs(filteredJobs);
  } else {
    setFilterJobs(allJobs);
  }
}, [allJobs, searchedQuery]);








  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-10 px-4 md:px-10">
        <div className="flex gap-4 justify-center items-start">
          <div className="w-30%">
            <FilterCard />
          </div>

          {filterJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className=" flex-1 h-[100vh]  w-[100%] overflow-y-auto pb-5 pt-5 pl-5   ">
              <div
                className=" grid grid-cols-3  "
                style={{
                  gap: "40px",
                }}
              >
                {filterJobs.map((job) => (
                  <motion.div
                  initial={{opacity:0,x:100}}
                  animate={{opacity:1,x:0}}
                  exit={{opacity:0,x:-100}}
                  transition={{duration:0.3}}
                  key={job?.id}>
                    <Job  job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Jobs;
