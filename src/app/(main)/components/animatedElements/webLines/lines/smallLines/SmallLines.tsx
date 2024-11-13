import Line from "./line/Line";

const SmallLines = ({ isAnimate, pathArr }: { isAnimate: boolean; pathArr: { id: number; path: string }[] }) => {
  return (
    <>
      {pathArr.map(({ id, path }) => {
        return <Line id={id} key={id} path={path} stroke="url(#paint11_linear_6007_308)" isAnimate={isAnimate}></Line>;
      })}
    </>
  );
};

export default SmallLines;
