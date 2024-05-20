"use client"

import React from 'react'
import { Button } from '../ui/button'
 

const btnName = [
  {
    id:1 ,
    name: "Newest"
  },
  {
    id:2,
    name: "Reocmended"
  },
  {
    id: 3,
    name: "Unanswerd"
  },
  {
    id:4,
    name: "frequent"
  }

]
  
const FilterSearch = (  ) => {
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {
        btnName.map((items )=>(
          <Button className=" ">
           {items.name}
          </Button>
        ))
      }
    </div>
  )
}

export default FilterSearch
