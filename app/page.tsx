"use client";
import { useState } from 'react';
export default function Home() {
const [count, setCount] = useState(0);
return (
<main className="flex min-h-screen items-center justify-center">
<div className="text-center">
<h1 className="text-4xl font-bold text-teal-600">
Hello World!
</h1>
<p className="mt-4 text-gray-500">
Button clicked: {count} times
</p>
<button
onClick={() => setCount(count + 1)}
className="mt-6 rounded-lg bg-orange-500
px-6 py-3 font-bold text-white
hover:bg-orange-600"
>
Click Me!
</button>
</div>
</main>
);
}
