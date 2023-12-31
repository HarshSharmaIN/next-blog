import {Fragment} from "react";
import MainNavigation from "@/components/layout/main-navigation";
export default function Layout(props) {
    return (
        <Fragment>
            <MainNavigation />
            <main>{props.children}</main>
        </Fragment>
    )
}