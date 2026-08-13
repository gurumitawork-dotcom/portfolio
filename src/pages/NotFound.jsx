import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center pt-28 px-4">
      <div className="text-center glass-card p-8 sm:p-12 max-w-md w-full">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-primary mt-7">
          Back to home
        </Link>
      </div>
    </section>
  );
}
