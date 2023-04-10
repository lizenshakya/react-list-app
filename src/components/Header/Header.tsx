import { BsSun, BsFillMoonFill } from "react-icons/bs"
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook"
import { toogleTheme } from "../../features/theme/themeSlice";

const Header = () => {
    const { darkTheme } = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    const onToogle = () => dispatch(toogleTheme());
    return (
        <header className="mb-20">
            <nav className="border-b border-grey-200 border-opacity-25 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#!" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap">
                            MovieTime
                        </span>
                    </a>
                <div className="flex item-center lg:order-2">
                    {darkTheme && <BsSun onClick={() => onToogle()} className="hover:opacity-50 cursor-pointer"/>}
                    {!darkTheme && <BsFillMoonFill onClick={() => onToogle()} className="hover:opacity-50 cursor-pointer"/>}
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header