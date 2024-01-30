import { getServerSession } from 'next-auth'
import authOptions from './authOptions'

// import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function getSession() {
  return await getServerSession(authOptions)
}
