import Link from "next/link";

export default function TopBanner(){

    return(
        <div className="bg-black text-white text-center px-28 py-2 text-sm relative">
        <p>Sign up and get 20% off to your first order. <Link href="/signup" className="underline">Sign Up Now</Link></p>
      </div>
    )
}