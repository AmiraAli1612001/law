const Layout = ({ children }) => {
  return (
    <>
      <main
        style={{
          background:
            "linear-gradient(315deg, rgb(199 161 66 / 30%) 0%, rgb(4 141 90 / 30%) 100%)",
        }}
        className="flex-1 md:p-10 lg:p-20 flex flex-col bg-bgGreen"
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
