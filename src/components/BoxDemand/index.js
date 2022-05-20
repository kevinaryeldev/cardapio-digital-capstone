import React from "react";
import {BsCheckSquare,BsXSquare} from 'react-icons/bs'
import {BiLoaderCircle,BiDish} from 'react-icons/bi'

import{BoxContent,TitleCard,LineDivCard} from './styles'

const BoxDemand = ({text, color, icon, qtd}) => {
    const listIcon  = () => (
        icon === "Bidish" ? <BiDish className="IconBox"></BiDish>
            :icon === "BsCheckSquare" ? <BsCheckSquare className="IconBox"></BsCheckSquare>
                :icon === "BsXSquare" ? <BsXSquare className="IconBox"></BsXSquare>   
                    :icon === "BiLoaderCircle" ?  <BiLoaderCircle className="IconBox"></BiLoaderCircle>:null
        )
  return (
    <BoxContent color={color}>
        {listIcon()}
      <TitleCard>{text}</TitleCard>
      <p>{qtd}</p>
      <LineDivCard></LineDivCard>
    </BoxContent>
  );
};
export default BoxDemand;
