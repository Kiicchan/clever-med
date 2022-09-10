import { PropsWithChildren } from "react";

export function Wrapper(props: PropsWithChildren) {
    return (
        <main className="mx-auto w-2/3 max-w-xl my-10">
            {props.children}
        </main>
    )
}
