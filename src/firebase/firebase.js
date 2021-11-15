import { initializeApp } from "@firebase/app";
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	deleteDoc,
	doc, 
	setDoc,
	getDoc
} from 'firebase/firestore'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, 
	// createUserWithEmailAndPassword  
} from "@firebase/auth";


const apiKey = `${process.env.REACT_APP_API_KEY}`
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "mika-shop.firebaseapp.com",
  projectId: "mika-shop",
  storageBucket: "mika-shop.appspot.com",
  messagingSenderId: "946868971069",
  appId: "1:946868971069:web:b8db5d4d7fb56fbc8c6c54",
  measurementId: "G-6H08XWFMVN"
};

// Init app
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig)

//Authentication with Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});
export const auth = getAuth(app)

export const SignInWithGoogle = () => {
	signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // eslint-disable-next-line no-unused-vars
    const token = credential.accessToken;
    // The signed-in user info.
    // eslint-disable-next-line no-unused-vars
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    // eslint-disable-next-line no-unused-vars
    const errorCode = error.code;
    // eslint-disable-next-line no-unused-vars
    const errorMessage = error.message;
    // The email of the user's account used.
    // eslint-disable-next-line no-unused-vars
    const email = error.email;
    // The AuthCredential type that was used.
    // eslint-disable-next-line no-unused-vars
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

export const SignOutFromGoogle = () => {
	const auth = getAuth();
	signOut(auth).then(() => {
	// Sign-out successful.
	}).catch((error) => {
	// An error happened.
	});
}

//Init Services
const db = getFirestore()

// Collection Ref
const colRef = collection(db, 'users')

// Get Collection data
export const getData = () => {
	getDocs(colRef)
	.then(data => data.docs.forEach(user => {
		console.log(user.data(), user.id)
	}))
}

// Add to Database

export const AddDataToDatabase = () => {
	addDoc(colRef, {
		name: 'Peter',
		lastName: 'Parker'
	})
	//.then(() => ...do smth)
}

// Delete from DB

export const deleteFromDataBase = () => {
	const docRef = doc(db, 'users', '3bbffEkD4aVuEFSyTSSn')
	deleteDoc(docRef)
	//.then(() => ...do smth)
}

export const createUserProfile = async (userAuth, additionalData) => {
	if (!userAuth) return

	const {displayName, email} = userAuth;
	const createdAt = new Date()
	
	const docRef = doc(db, "users", `${userAuth.uid}`);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
 		//  console.log("Document data:", docSnap.data());
	} else {
		// doc.data() will be undefined in this case
		// console.log("No such document!");
		setDoc(doc(db, "users", `${userAuth.uid}`),{
            displayName,
			email,
			createdAt,
			...additionalData
        })

	}
		
}


// export const CreateProfileWithEmailAndPassword = async (email, password) => {

// 		try {
// 			const user = await createUserWithEmailAndPassword(auth, email, password)
// 			console.log(user, user.user.uid)
// 		} catch (error) {
// 			console.log(error.message)
// 		}

// // 	console.log(email, password)

// }