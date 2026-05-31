import ProtectedRoute from "../components/protectedroute";
import Builder from "./Builder";

export default function BuilderPage() {
    return (
        <ProtectedRoute>
            <Builder />
        </ProtectedRoute>
    );
}
