import React from "react";
import {  Outlet, useNavigate } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const AdminNavbar = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className='bg-black  p-3' >
    <NavLink  className=' m-0 fs-1 fw-bolder fst-italic ' style={{color:' 	 #a6ff4d'}}   exact to="/" activeClassName="activeClicked"> ADMIN</NavLink>
</div> */}
      <div  >
        <div
          className="d-flex "
          style={{
              backgroundColor:'black',
              overflow: "scroll initial",
            width: "100%",
           display:'flex',
         
           backgroundImage:'url(" https://c4.wallpaperflare.com/wallpaper/816/770/388/jordan-fly-wade-nike-wallpaper-preview.jpg ")'
          }} 
        >
          
          <CDBSidebar   textColor="#fff" backgroundColor="black">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <Button onClick={() => navigate("/")}> Home</Button>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/admin/adminDetile" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user">
                    USER DETILES
                  </CDBSidebarMenuItem>
                </NavLink>

                <NavLink
                  exact
                  to="/admin/adminEdit"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="columns">
                    {" "}
                    COLLECTIONS{" "}
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="admin/adminAdd" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table">
                    ADD PRODUCTS{" "}
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">
                    ANALYTICS
                  </CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
            <CDBSidebarFooter style={{ textAlign: "center" }}>
              <div
                className="sidebar-btn-wrapper"
                style={{
                  padding: "20px 5px",
                }}
              ></div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default AdminNavbar;