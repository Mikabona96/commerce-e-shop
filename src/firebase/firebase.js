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
  authDomain: "mika-shop-e457c.firebaseapp.com",
  projectId: "mika-shop-e457c",
  storageBucket: "mika-shop-e457c.appspot.com",
  messagingSenderId: "949103509594",
  appId: "1:949103509594:web:fddb86e25b8206ccdad863",
  measurementId: "G-JK9032WYYN"
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
	console.log(user)
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
export const db = getFirestore()

// Collection Ref
const colRef = collection(db, 'users')

// Get Collection data
export const getData = () => {
	getDocs(colRef)
	.then(data => data.docs.forEach(user => {
		console.log(user.data(), user.id)
	}))
}

export const getCollectionsData = () => {
	const colRef = collection(db, 'collections')
	return getDocs(colRef)
	.then(collection => {
			let arr = []
			collection.docs.forEach(col => {
				arr.push({ ...col.data(), routeName: col.data().title.toLowerCase() })
			})
			return arr
		})
	.then(collections => {
			const sortedCollections = collections.sort((a, b) => {
				if (a.id > b.id) {
					return 1;
				}
				if (a.id < b.id) {
					return -1;
				}
				return 0;
			})
			return sortedCollections
		})
	// .then(data=> console.log(data))
}


// Add to Database

export const AddDataToDatabase = () => {
	addDoc(colRef, {
		name: 'Peter',
		lastName: 'Parker'
	})
	//.then(() => ...do smth)
}

export const addCollectionAndItems = (collectionKey, objectsToAdd) => {
		const colKey = collection(db, `${collectionKey}`)

		objectsToAdd.forEach(obj => {
			addDoc(colKey, obj)
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