const TourFilters = () => {
  return (
    <div className="w-[300px] h-[60px] bg-white rounded-lg shadow-sm p-4 flex gap-2">
      <button className="px-4 py-1 bg-slate-100 rounded-full text-sm">
        AI Tours
      </button>
      <button className="px-4 py-1 bg-slate-100 rounded-full text-sm">
        User Tours
      </button>
    </div>
  );
};

export default TourFilters;
