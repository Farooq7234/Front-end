const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteAcollectionId: String(import.meta.env.VITE_APPWRITE_ATTENDANCE_COLLECTION_ID),
    appwriteUcollectionId: String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID),
}


export default conf