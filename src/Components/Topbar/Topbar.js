import ThemeSelector from '../ThemeSelector/ThemeSelector'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

export default function Topbar({rotate,menuClicked}){

    return(
        <div className = 'fixed flex top-4 right-4 z-20'>
            <ThemeSelector />
            <HamburgerMenu rotate={rotate} menuClicked={menuClicked} />
        </div>
    )
}