import { Dispatch, SetStateAction, FC } from "react";

interface SearchBoxProp {
    setSearchTerm: Dispatch<SetStateAction<string>>
}

const SearchBox: FC<SearchBoxProp> = (props) => {
    const { setSearchTerm } = props;
    return <input
        onChange={ e => setSearchTerm(e.target.value.trim().toLowerCase()) }
        type="search"
        className="block p-4 pl-10 focus:outline-none text-sm text-gray-900 bg-gray-50 rounderd-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
        placeholder="Search...."></input>
}

export default SearchBox;