import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    
    const base64 = process.env.FIREBASE_ADMIN_SDK_BASE64!;
    const serviceAccount = JSON.parse(Buffer.from(base64, "base64").toString("utf8"));

    initializeApp({
      credential: cert(serviceAccount),
    });

    // initializeApp({
    //   credential: cert({
    //     projectId: process.env.FIREBASE_PROJECT_ID,
    //     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    //     // Replace newlines in the private key
    //     privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    //   }),
    // });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
