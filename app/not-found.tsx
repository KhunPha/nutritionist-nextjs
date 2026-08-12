import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full min-h-[calc(100vh-160px)] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Error 404
        </p>

        <h1 className="mt-4 text-7xl font-bold tracking-tight">
          Page not found
        </h1>

        <p className="mt-6 max-w-md text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <Link
          href="/"
          className="inline-flex mt-8 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}