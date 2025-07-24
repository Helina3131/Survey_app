
import React from 'react';
import { Link } from 'react-router-dom';

export default function Surveys() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Surveys
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-4">Welcome to the surveys page.</p>
          <Link
            to="/surveys/create"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            + Create Survey
          </Link>
        </div>
      </main>
    </>
  );
}
