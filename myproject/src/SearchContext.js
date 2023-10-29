import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchAuthor, setSearchAuthor] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [searchDoi, setSearchDoi] = useState('');
    const [searchInstitution, setSearchInstitution] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const contextValue = {
        searchAuthor,
        setSearchAuthor,
        searchTitle,
        setSearchTitle,
        searchDoi,
        setSearchDoi,
        searchInstitution,
        setSearchInstitution,
        searchResult,
        setSearchResult,
    };

    return (
        <SearchContext.Provider value={contextValue}>
        {children}
        </SearchContext.Provider>
    );
}

export function useSearchContext() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error(`useSearch must be used within a SearchProvider`);
    }
    return context;
}