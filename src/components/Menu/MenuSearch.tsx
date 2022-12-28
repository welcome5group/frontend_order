import React, { useState } from 'react';
import styled from './Menu.module.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import { menuItemTypes } from '../../types/types';

interface types {
  openSearch: boolean
  setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>
  inputValue: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MenuSearch = ({ openSearch, setOpenSearch, inputValue, handleChange }: types) => {
  return (
    <>
      {
        openSearch ?
          <div className={styled.searchBar}>
            <input value={inputValue} onChange={handleChange} />
            <AiOutlineSearch className={styled.searchBtn} />
          </div> :
          <AiOutlineSearch className={styled.searchOpenBtn} onClick={() => setOpenSearch(!openSearch)} />
      }
    </>
  );
};

export default MenuSearch;