import SideBar from "./_components/SideBar";
function layout({ children }) {
  return (
    <>
      <div>
        <SideBar className='hidden h-full md:w-64 flex-col fixed inset-y-0 z-100'/>
      </div>
      <div className="md:ml-64">
      {children}
      </div>
    </>
  );
}

export default layout;
