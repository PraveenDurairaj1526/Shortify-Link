import { db } from "@/lib/firebase.config";
import { collection, query, where, getDocs, doc, updateDoc, increment } from "firebase/firestore";
import { redirect } from "next/navigation";

export const metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default async function RedirectPage({ params }) {
    const q = query(collection(db, "manage_url"), where("id", "==", params.id));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
        const docRef = snapshot.docs[0].ref;
        const data = snapshot.docs[0].data();

        await updateDoc(docRef, {
            clickCount: increment(1)
        });
        if (data?.verification == 'not-approved') {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen">
                      <h2 className="text-3xl font-semibold mb-2 text-red-500">Link Blocked</h2>
                    <p>This link has been blocked by the admin because it violates our content guidelines. Please review our Privacy Policy for more details.</p>
                </div>
            )
        } else {
            redirect(data.originalUrl);
        }
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

