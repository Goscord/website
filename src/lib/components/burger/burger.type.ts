import { Dispatch, SetStateAction, SVGAttributes } from "react";

export type BurgerProps = SVGAttributes<SVGElement> & {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}