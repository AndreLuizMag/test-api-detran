// import { db } from './config'
// import {
// 	collection,
// 	getDocs,
// 	addDoc,
// 	updateDoc,
// 	deleteDoc,
// 	doc,
// } from 'firebase/firestore'
// import { User } from '@/types/user'

// const usersCollection = collection(db, 'users')

// export const getUsers = async (): Promise<User[]> => {
// 	const snapshot = await getDocs(usersCollection)
// 	return snapshot.docs.map((doc) => ({
// 		id: doc.id,
// 		...doc.data(),
// 	})) as User[]
// }

// export const addUser = async (
// 	user: Omit<User, 'id'>
// ): Promise<void> => {
// 	await addDoc(usersCollection, user)
// }

// export const updateUser = async (
// 	id: string,
// 	user: Partial<User>
// ): Promise<void> => {
// 	const userDoc = doc(db, 'users', id)
// 	await updateDoc(userDoc, user)
// }

// export const deleteUser = async (
// 	id: string
// ): Promise<void> => {
// 	const userDoc = doc(db, 'users', id)
// 	await deleteDoc(userDoc)
// }
