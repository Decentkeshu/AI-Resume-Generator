"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [allowed, setAllowed] = useState(false);

    useEffect(() => {
        const userId = localStorage.getItem("userId"); // ← match the key you saved
         console.log("userId from localStorage:", userId);
        if (!userId) {
             console.log("redirecting to signin...");
            router.push("/signin"); // ← your signin page route
        } else {
            setAllowed(true);
        }
    }, []);

    if (!allowed) return <p>Loading...</p>;
    return <>{children}</>;
}