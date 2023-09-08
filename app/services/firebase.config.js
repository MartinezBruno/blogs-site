import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA0XjuaueWb-GOlIwbaSCe7nNUceNPERBo',
  authDomain: 'master-tuner-393901.firebaseapp.com',
  projectId: 'master-tuner-393901',
  storageBucket: 'master-tuner-393901.appspot.com',
  messagingSenderId: '148608047987',
  appId: '1:148608047987:web:10aabb1e459bb67f548306'
}

const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)

export const uploadImageAndGetURL = async ({ userId, file }) => {
  try {
    const storageRef = ref(storage, `${userId}/${file.name}`)

    await uploadBytes(storageRef, file)
    const imageUrl = await getDownloadURL(storageRef)

    return imageUrl
  } catch (error) {
    console.error(error)
  }
}
