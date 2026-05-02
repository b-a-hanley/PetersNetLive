import { Bannr } from "../../components/Text";
import { churchName } from "../Config";

export default function Banner({children}) {
  return (
    <Bannr churchName={churchName}>{children}</Bannr>
  );
}