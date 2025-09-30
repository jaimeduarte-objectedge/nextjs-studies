import { Fragment } from "react/jsx-runtime";
import MainHeader from "./main-header";

export default function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}
