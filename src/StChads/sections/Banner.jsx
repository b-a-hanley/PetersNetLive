import { Bannr } from "../../components/Text";

export function Banner({children}) {
  return (
    <Bannr churchName={churchName}>{children}</Bannr>
  );
}