import { PropsWithChildren } from "react";

export function Wrapper(props: PropsWithChildren) {
    return (
        <main className="mx-auto md:max-w-xl my-10 px-2 lg:w-2/3 lg:px-0">
            {props.children}
        </main>
    )
}
