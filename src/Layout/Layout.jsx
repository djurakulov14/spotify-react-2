import NavBar from "../Components/NavBar";

function Layout({children}) {
    return (
      <>
        <NavBar/>
        {
            children
        }
      </>
     );
}

export default Layout;