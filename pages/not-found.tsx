import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-4 text-gray-800">
        Page Not Found.
      </p>
      <Link href="/">
        <a className="mt-6 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
          Back to Home
        </a>
      </Link>
    </div>
  );
}
