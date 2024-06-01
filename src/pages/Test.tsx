import {
  Astronav,
  MenuItems,
  MenuIcon,
  Dropdown,
  DropdownItems,
  DropdownSubmenu,
} from "astro-navbar";

export default function Test() {
  return (
    <div>
      <Astronav>
        <div className="flex justify-between">
          <a>Your Logo</a>
          <MenuIcon className="w-4 h-4 text-gray-800" />
        </div>
        <MenuItems className="hidden lg:flex">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>
              <Dropdown className="group">
                <button>
                  <span> Services </span>
                  <svg className="group-open:rotate-180">...arrow..</svg>
                </button>
                <DropdownItems>
                  <div className="absolute top-0">
                    <ul>
                      <li>Menu 1</li>
                      <li>Menu 2</li>
                      <li>
                        <DropdownSubmenu>
                          <button>Submenu</button>
                          <DropdownItems>
                            <ul>
                              <li>Sub Menu 1</li>
                              <li>Sub Menu 2</li>
                            </ul>
                          </DropdownItems>
                        </DropdownSubmenu>
                      </li>
                    </ul>
                  </div>
                </DropdownItems>
              </Dropdown>
            </li>
          </ul>
        </MenuItems>
      </Astronav>
    </div>
  );
}
