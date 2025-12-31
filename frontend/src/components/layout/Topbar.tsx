const Topbar = () => {
  return (
    <header className="sticky top-0 z-10 h-16 bg-white border-b-amber-50 flex items-center justify-between px-6">
      <div className="text-sm text-gray-600" />
      <div className="flex items-center gap-4">
        {/* <button className="text-sm text-gray-600 hover:text-gray-900">
          Notifications
        </button> */}
        <div className="h-10 w-10 rounded-full bg-indigo-950 text-white flex items-center justify-center text-sm">
          D
        </div>
      </div>
    </header>
  );
};

export default Topbar;
