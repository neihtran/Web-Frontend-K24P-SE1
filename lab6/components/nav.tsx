import Link from "next/link";

const Item = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="px-3 py-2 rounded-md border text-sm hover:bg-black hover:text-white transition"
  >
    {label}
  </Link>
);

export default function Nav() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex flex-wrap gap-2 items-center">
        <Item href="/" label="Home" />
        <Item href="/about" label="About" />
        <Item href="/contact" label="Contact" />

        <span className="mx-2 opacity-40">|</span>

        <Item href="/products" label="Products" />
        <Item href="/cart" label="Cart" />

        <span className="mx-2 opacity-40">|</span>

        <Item href="/auth/login" label="Login" />
        <Item href="/auth/register" label="Register" />
        <Item href="/auth/dashboard" label="Dashboard" />

        <span className="flex-1" />

        <Item href="/lazy" label="Lazy Demo" />
      </nav>
    </header>
  );
}
