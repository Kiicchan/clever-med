import { PropsWithChildren } from "react";

export function Wrapper(props: PropsWithChildren) {
    return (
        <main className="mx-auto max-w-xl my-10 px-2 w-full lg:w-3/4 lg:px-0">
            {props.children}
        </main>
    )
}
