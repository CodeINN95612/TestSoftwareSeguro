import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (error) {
    return (
      <main className="flex items-center justify-center h-screen text-black">
        <div className="bg-gray-100 p-8 rounded shadow-lg">
          <h3 className="text-3xl font-bold mb-4">error</h3>
        </div>
      </main >
    )
  }

  if (isLoading) {
    return (
      <main className="flex items-center justify-center h-screen text-black">
        <div className="bg-gray-100 p-8 rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Loading...</h1>
        </div>
      </main >
    )
  }

  if (!user) {
    return (
      <main className="flex items-center justify-center h-screen text-black">
        <div className="bg-gray-100 p-8 rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-2">Login</h1>
          <p className="text-gray-600 py-4">Log in to continue</p>
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded" href='api/auth/login'>
            Log In
          </a>
        </div>
      </main >
    )
  }

  return (
    <main className="flex items-center justify-center h-screen text-black">
      <div className="bg-gray-100 p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
        <p className="text-gray-600 py-4">Hello {user?.name}!</p>
        <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 mr-4 rounded" href='projects'>
          Continue
        </a>
        <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded" href='api/auth/logout'>
          Log Out
        </a>
      </div>
    </main >
  )
}
