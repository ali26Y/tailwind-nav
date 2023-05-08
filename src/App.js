/* eslint-disable jsx-a11y/anchor-is-valid */

// import { ReactComponent as BellIcon } from "./icons/bell.svg";
// import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
// import { ReactComponent as CaretIcon } from "./icons/caret.svg";
// import { ReactComponent as PlusIcon } from "./icons/plus.svg";

// import { Navbar, NavItem, DropdownMenu } from "./components/FacebookNavbar";

import { VerticalNav } from "./components/VerticalNav";

function App() {
  // return (
  //   <Navbar>
  //     <NavItem icon={<PlusIcon />} />
  //     <NavItem icon={<BellIcon />} />
  //     <NavItem icon={<MessengerIcon />} />

  //     <NavItem icon={<CaretIcon />}>
  //       <DropdownMenu></DropdownMenu>
  //     </NavItem>
  //   </Navbar>
  // );

  return <VerticalNav></VerticalNav>;
}

export default App;
