import { Table, TableBody, TableCell } from "../ui/table";
import React, { useEffect, useState } from "react";
import { TableCaption, TableHead, TableHeader, TableRow } from "../ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies,searchCompanyByText} = useSelector((store) => store.company);

const [filterCompany,setFilterCompany] =useState(companies);
const navigate = useNavigate();


useEffect(() => {
  const filteredCompany = companies.length > 0 && companies.filter((company) => {
    if (!searchCompanyByText) {
      return true;
    }
    return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());
  });
  setFilterCompany(filteredCompany);
}, [companies, searchCompanyByText]);





  return (
    <div style={{
      marginLeft :"150px"
    }}>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          
              {filterCompany?.map((company) => (
                <tr>
                    <TableCell>
                      <Avatar className="overflow-hidden rounded-full border border-gray-50">
                        <AvatarImage
                          src={company.logo}
                          alt="Company logo"
                          style={{
                            height: "60px",
                            width: "60px",
                          }}
                        />
                      </Avatar>
                    </TableCell>

                    <TableCell>{company.name}</TableCell>
                    <TableCell>  {company.createdAt ? company.createdAt.split("T")[0] : "N/A"}</TableCell>

                    <TableCell className="text-right cursor-pointer ">
                      <Popover>
                        <PopoverTrigger>
                          <MoreHorizontal />
                        </PopoverTrigger>
                        <PopoverContent className="w-32">
                          <div  onClick= {()=> navigate(`/admin/companies/${company._id}`)} className="flex items-center gap-2 w-fit cursor-pointer">
                            <Edit2 className="w-4" />
                            <span>Edit</span>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                 </tr>
               ) )
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;