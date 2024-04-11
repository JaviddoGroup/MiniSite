import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, updateDoc, increment } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_uzRUUEwNyXBuqi-yAql3xafyrx3YDOo",
    authDomain: "hellper-javiddo.firebaseapp.com",
    projectId: "hellper-javiddo",
    storageBucket: "hellper-javiddo.appspot.com",
    messagingSenderId: "946810225389",
    appId: "1:946810225389:web:28b34eb7e12337c2f8c2e4",
    measurementId: "G-B5J0NFLGG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

// Функция для увеличения счетчика просмотров
async function incrementViews(newsTitle) {
    const newsDocRef = doc(db, "news", newsTitle);

    try {
        // Атомарное обновление значения счетчика просмотров
        await updateDoc(newsDocRef, {
            views: increment(1)
        });
        console.log("Счетчик просмотров успешно увеличен.");
    } catch (error) {
        console.error("Ошибка при обновлении счетчика просмотров: ", error);
    }
}

// Функция для обновления просмотров при открытии новости
function updateViews(newsTitle) {
    incrementViews(newsTitle);
}

// Ваш остальной JavaScript код здесь
// ...
