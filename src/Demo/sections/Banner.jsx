import { Bannr } from "../../components/Text";
import { churchName } from "../Config";

export function Banner({children}) {
  return (
    <Bannr churchName={churchName}>{children}</Bannr>
  );
}