import { Suspense } from "react";
import Builder from "./Builder";

export default function Page() {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Builder />
        </Suspense>
    );
}