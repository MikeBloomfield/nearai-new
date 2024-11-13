const MainLines = ({ pathArr }: { pathArr: { id: number; path: string }[] }) => {
  return (
    <>
      {pathArr.map(({ id, path }) => {
        return <path key={id} opacity="0.5" d={path} stroke={`url(#paint${id}_linear_6007_308)`} strokeWidth="1.19905" />;
      })}
    </>
  );
};

export default MainLines;
