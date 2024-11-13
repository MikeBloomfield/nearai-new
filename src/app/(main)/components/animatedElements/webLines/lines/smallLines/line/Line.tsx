import styles from "./line.module.scss";
import cn from "classnames";

const Line = ({ id, path, stroke, isAnimate }: { id: number; path: string; stroke: string; isAnimate: boolean }) => {
  return (
    <>
      <path className={cn([styles[`line-${id}`]], { [styles.isAnimate]: isAnimate }, styles.line)} d={path} stroke={stroke} />
    </>
  );
};

export default Line;
