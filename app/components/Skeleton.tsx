const Sekeleton: React.FC = () => {
  return( 
    <div className="flex flex-col gap-4 w-full">
      <div className="skeleton h-8 w-full"></div>
      <div className="skeleton h-8 w-full"></div>
      <div className="skeleton h-8 w-full"></div>
      <div className="skeleton h-8 w-full"></div>
    </div>
  );
};

export default Sekeleton;