import { Img } from "../../components/Section";
import { ImgPath } from "../Config";

export function Image({shadow, path}) {
  return (
    <Img shadow={shadow} path={ImgPath+path}/>
  );
}