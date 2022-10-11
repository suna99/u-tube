import styles from './search_header.module.css';
import React, { useRef } from 'react';

const SearchHeader = ({onSearch}) => {
  const inputRef = useRef();
  const handleSearch = () =>{
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick= () =>{
    handleSearch();
  };

  const onKeyPress= (event) =>{
    if(event.key ==='Enter'){
      handleSearch();
    }
  };

  return(
    <header className={styles.header}>
      <div className={styles.title_wrap}>
        <img className={styles.img} src='/images/logo.png' alt='logo'/>
        <h1 className={styles.title}>U-tube</h1>
      </div>
      <div className={styles.search_wrap}>
        <input ref={inputRef} className={styles.input} type="search" placeholder="검색어를 입력하세요." onKeyPress={onKeyPress}/>
        <button className={styles.button} type="submit" onClick={onClick}>
          검색
        </button>
      </div>
      <div className={styles.profile}>
        <a href="https://github.com/suna99/u-tube">
        </a>
      </div>
    </header>
  )};

export default SearchHeader;