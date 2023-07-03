"use client"
import React, { useState } from 'react'
import SearchManufacture from './SearchManufacture'

const SearchBar = () => {
    const handleSearch = () => {}
    const [manufacture, setManufacture] = useState('')
    return (
        <form className='searchBar' onSubmit={handleSearch}>
            <div className='searchBar__item'>
                <SearchManufacture
                manufacture={manufacture}
                setManufacture={setManufacture}
                />
            </div>
        </form>
    )
}

export default SearchBar