import Image from "next/image"
import casual from "@/public/images/dressStyle/casual.png"
import formal from "@/public/images/dressStyle/formal.png"
import party from "@/public/images/dressStyle/party.png"
import gym from "@/public/images/dressStyle/gym.png"

export default function BrowseByDressStyle() {

    return (
        <div className="bg-gray-100 py-8 w-full max-w-[90vw] mx-auto rounded-3xl px-4 sm:px-6 lg:px-8 mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold text-black mb-8">BROWSE BY DRESS STYLE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl bg-white">
                    <Image 
                        src={casual} 
                        alt="casual wear"
                        className="w-full h-52 object-cover"
                        width={500}
                        height={300}
                    />
                <div className="absolute top-4 left-4  px-4 py-2 rounded-xl">
                    <span className="text-4xl font-bold">Casual</span>
                </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white">
                    <Image 
                        src={formal} 
                        alt="formal dresses"
                        className="w-full h-52 object-cover"
                        width={500}
                        height={300}
                    />
                <div className="absolute top-4 left-4  px-4 py-2 rounded-xl">
                    <span className="text-4xl font-bold">Formal</span>
                </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white">
                    <Image 
                        src={party} 
                        alt="party costumes"
                        className="w-full h-52 object-cover"
                        width={500}
                        height={300}
                    />
                <div className="absolute top-4 left-4  px-4 py-2 rounded-xl">
                    <span className="text-4xl font-bold">Party</span>
                </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-white">
                    <Image 
                        src={gym} 
                        alt="gym wear"
                        className="w-full h-52 object-cover"
                        width={500}
                        height={300}
                    />
                <div className="absolute top-4 left-4  px-4 py-2 rounded-xl">
                    <span className="text-4xl font-bold">Gym</span>
                </div>
                </div>
            </div>
        </div>
    )
}