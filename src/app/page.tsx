import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-red_hat">Welcome to CraftIndika</h1>
      <Link href="/privacypolicy" target="_blank">
        Privacy Policy
      </Link>
      <Link href="/termsandconditions" target="_blank">
        Terms and Conditions
      </Link>
    </main>
  );
}
