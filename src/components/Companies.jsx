import React from "react";
import { comps } from "./dataFolder/CompaniesData";
import { StyledCompanies } from "./styled/Companies.styled";

function Companies() {
  return (
    <StyledCompanies>
        {comps.map((comp)=> {
            return <img src={comp.img} alt="" key={comp.id} />
        })}
    </StyledCompanies>
  );
}

export default Companies;
