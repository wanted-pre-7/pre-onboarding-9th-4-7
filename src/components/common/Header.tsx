const Header = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-row p-6 items-center">
          <h1 className="text-3xl font-bold">
            switch<span className="text-orange-500">won</span>
          </h1>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-orange-500 to-yellow-500" />
    </div>
  );
};

export default Header;
