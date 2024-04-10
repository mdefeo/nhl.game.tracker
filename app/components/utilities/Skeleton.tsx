// /app/components/utilities/Skeleton.tsx
const Skeleton: React.FC = () => {
  return( 
    <div className="flex flex-col gap-4 w-full">
      <div className="skeleton h-16 w-full"></div>
      <div className="skeleton h-16 w-full"></div>
      <div className="skeleton h-16 w-full"></div>
      <div className="skeleton h-16 w-full"></div>
    </div>
  );
};

export default Skeleton;