import {createContext, useContext} from "react";

export const useGlobalNavbarStateContext = () => useContext(NavBarContext);

export type NavbarState = {
    isToggled: boolean,
    toggle: () => void
}
export const NavBarContext = createContext<NavbarState>({
    isToggled: false,
    toggle: () => {
    }
});
