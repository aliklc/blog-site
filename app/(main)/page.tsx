import Link from "next/link";

export default function Home(){
    return(
        <div>
            <div className="h-50 grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
                <Link href="/blog"className="bg-blue-100 p-6 rounded-lg hover:bg-blue-200 transition">
                    <h2 className="text-black text-4xl font-semibold mb-2">Blog Yazıları</h2>
                    <p className="text-black text-base mt-5 mb-5">Son Yazılarımızı Okuyun</p>
                </Link>
                <Link href="/about" className="bg-green-100 p-6 rounded-lg hover:bg-green-200 transition">
                    <h2 className="text-black text-4xl font-semibold mb-2">Hakkımızda</h2>
                    <p className="text-black text-base mt-5 mb-5">Biz Kimiz</p>
                </Link>
                
            </div> 
        </div>
    )
}