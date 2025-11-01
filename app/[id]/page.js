import { db } from "@/lib/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { redirect } from "next/navigation";

export default async function RedirectPage({ params }) {
    const q = query(collection(db, "manage_url"), where("id", "==", params.id));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
        const data = snapshot.docs[0].data();
        console.log('data',data)
        redirect(data.originalUrl);
    } else {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold text-red-500">
                    404 - Link not found
                </h1>
            </div>
        );
    }
}

