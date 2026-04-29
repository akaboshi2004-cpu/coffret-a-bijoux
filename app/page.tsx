'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Cinzel, Noto_Serif_JP } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400','600','700'] })
const noto = Noto_Serif_JP({ subsets: ['latin'], weight: ['400','500','700'] })
const fadeInUp={initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:0.8},viewport:{once:true,amount:0.2}}

/*
追加ファイルも作成してください（手動）
app/cast/[slug]/page.tsx
下記コードを貼り付け用として末尾に追記しています。
*/

{/* ローディング画面 */}
export default function Page(){
 const [trail,setTrail]=useState<{x:number,y:number,id:number}[]>([])
 const [loading,setLoading]=useState(true)
 const [gemColor,setGemColor]=useState('')
 const [mouse,setMouse]=useState({x:50,y:50})
 useEffect(()=>{
  const navType=performance.getEntriesByType('navigation')[0]?. type
  const visited=sessionStorage.getItem('coffret_visited')
  // 初回訪問またはページ更新(F5/Ctrl+F5)の場合のみローディング表示
  if(!visited || navType==='reload'){
   const t=setTimeout(()=>{
    setLoading(false)
    sessionStorage.setItem('coffret_visited','true')
   },3000)
   const colors=['text-sky-300','text-purple-300','text-green-500','text-pink-300','text-lime-300','text-red-500','text-blue-500','text-amber-400']
   setGemColor(colors[Math.floor(Math.random()*colors.length)])
   return ()=>clearTimeout(t)
  }else{
   setLoading(false)
  }
   const move=(e:MouseEvent)=>setMouse({x:(e.clientX/window.innerWidth)*100,y:(e.clientY/window.innerHeight)*100})
  window.addEventListener('mousemove',move)
  window.addEventListener('mousemove',(e:MouseEvent)=>{
   const id=Date.now()+Math.random()
   setTrail(prev=>[...prev,{x:e.clientX,y:e.clientY,id}].slice(-18))
   setTimeout(()=>setTrail(prev=>prev.filter(t=>t.id!==id)),2000)
  })
  return ()=>window.removeEventListener('mousemove',move)
 },[])
 const gems=[['larimar','ラリマー'],['ametrine','アメトリン'],['zoisite','ゾイサイト'],['starspinel','スタースピネル'],['prehnite','プレナイト'],['ruby','ルビー'],['sapphire','サファイア'],['topaz','インペリアルトパーズ']]
  const helpa=[['help1','使用人']]

 if(loading){
  return (
   <main className={`${noto.className} min-h-screen bg-black text-white flex items-center justify-center`}>
    <div className="text-center space-y-4 animate-pulse">
     <div className={`text-5xl ${gemColor}`}>✦✦✦</div>
     <div className={`${cinzel.className} text-2xl tracking-[0.2em]`}>coffret à bijoux</div>
     <p className="text-sm text-neutral-500">Loading...</p>
    </div>
   </main>
  )
 }

 {/* ヘッダー部分 */}
 return (
 <main className={`${noto.className} min-h-screen pt-24 bg-gradient-to-b from-black via-neutral-950 to-black text-neutral-100 relative overflow-hidden`}>
  <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl shadow-lg shadow-black/30">
   <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 rounded-xl border border-neutral-700 overflow-hidden">
        <Image src="/logo.jpg" alt="ロゴ" fill className="object-cover" />
      </div>
      <span className={`${cinzel.className} tracking-[0.2em] text-sm`}>coffret à bijoux</span>
    </div>
    <div className="flex gap-4 text-sm flex-wrap justify-end">
      <a href="#home" className="hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,.8)] transition">Home</a>
      <a href="#staff" className="hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,.8)] transition">Cast</a>
      <a href="#shop" className="hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,.8)] transition">お店/営業日</a>
      <a href="#gallery" className="hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,.8)] transition">Gallery</a>
      <a href="https://x.com/coffret_ff14/media" target="_blank" rel="noopener noreferrer">X</a>
    </div>
   </nav>
  </header>

{/* お店タイトル掲載 */}
  <motion.section {...fadeInUp} id="home" className="max-w-6xl mx-auto px-6 pt-8 pb-20">
   <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
    <div className="relative h-56 md:h-80 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center text-neutral-400">
      <Image src="/1500x500.jpg" alt="ヘッダー" fill className="object-cover" />
    </div>
   </div>
   <div className="relative mt-10 text-center">
    <div className="relative mx-auto w-32 h-32 rounded-3xl items-center justify-center text-neutral-400">
      <Image src="/logo.jpg" alt="ロゴ" fill className="object-cover" />
    </div>
    <h1 className={`${cinzel.className} text-5xl md:text-7xl mt-6 tracking-[0.12em] font-semibold bg-gradient-to-r from-white via-amber-200 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-[shine_4s_linear_infinite]`}>
      coffret à bijoux</h1>
    <p className="mt-6 max-w-2xl mx-auto text-neutral-300 font-light">木漏れ日の差す静かな宝石商。八つの輝きは今宵、メスラの姿を得て舞台へ現れる。</p>
    <p className="mt-1 max-w-2xl mx-auto text-neutral-300 font-light">ようこそ、選ばれし客人よ。</p>
   </div>
  </motion.section>

{/* キャストプロフィール掲載 */}
  <section id="servant" className="max-w-6xl mx-auto px-6 py-16 animate-[fadeInUp_1s_ease_forwards]">
   <h2 className="text-4xl mb-8 tracking-[0.14em] text-amber-200 border-b border-amber-200/30 pb-2">Cast </h2>
      <h3 className="text-2xl mb-8 tracking-[0.14em] text-amber-200">Jewels </h3>
   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {gems.map(([slug,name])=>(
      <Link key={slug} href={`/cast/${slug}`} className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-5 block hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-200/10 transition duration-300">
        <div className="relative h-40 rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-900 mb-4 flex items-center justify-center text-sm text-neutral-400 overflow-hidden">
          {slug === 'zoisite' ? (
            <Image src="/kameprofile.jpg" alt={name} fill className="object-cover" />
          ) : (
            '画像追加場所'
          )}
        </div>
        <h3 className="text-xl">{name}</h3>
        <div className={`mt-2 h-1 rounded-full ${slug==='larimar'?'bg-sky-300':slug==='ametrine'?'bg-purple-300':slug==='zoisite'?'bg-green-500':slug==='starspinel'?'bg-pink-300':slug==='prehnite'?'bg-lime-300':slug==='ruby'?'bg-red-500':slug==='sapphire'?'bg-blue-500':'bg-amber-400'}`}></div>
        <p className="text-sm text-neutral-400 mt-2">紹介ページへ</p>
      </Link>
    ))}
   </div>
  </section>

  {/* 使用人プロフィール掲載 */}
  <section id="staff" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl mb-8 tracking-[0.14em] text-amber-200">使用人 </h3>
   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {helpa.map(([slug,name])=>(
      <Link key={slug} href={`/cast/${slug}`} className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-5 block hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-200/10 transition duration-300">
        <div className="relative h-40 rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-900 mb-4 flex items-center justify-center text-sm text-neutral-400 overflow-hidden">
          {slug === 'helpa' ? (
            <Image src="/kameprofile.jpg" alt={name} fill className="object-cover" />
          ) : (
            '画像追加場所'
          )}
        </div>
        <h3 className="text-xl">{name}</h3>
        <div className={`mt-2 h-1 rounded-full ${slug==='larimar'?'bg-sky-300':slug==='ametrine'?'bg-purple-300':slug==='zoisite'?'bg-green-500':slug==='starspinel'?'bg-pink-300':slug==='prehnite'?'bg-lime-300':slug==='ruby'?'bg-red-500':slug==='sapphire'?'bg-blue-500':'bg-amber-400'}`}></div>
        <p className="text-sm text-neutral-400 mt-2">紹介ページへ</p>
      </Link>
    ))}
   </div>
  </section>

{/* お店 / 営業日についての案内 */}
  <section id="shop" className="max-w-6xl mx-auto px-6 py-16 animate-[fadeInUp_1s_ease_forwards]">
   <div className="rounded-3xl border border-white/10 p-8 bg-black/40 backdrop-blur-md shadow-2xl shadow-black/30">
    <h2 className="text-3xl mb-4 tracking-[0.14em] text-amber-200">お店 / 営業日 </h2>
    <p>Elemental DC / Gungnir / Lavender Beds 22-3</p>
    <p className="mt-2">予約不要・自由来店 / ショー形式営業</p>
    <div className="mt-6 h-40 rounded-2xl border border-dashed border-neutral-700 flex items-center justify-center text-neutral-400">営業日カレンダー画像や告知を後日追加</div>
   </div>
  </section>

{/* ギャラリー */}
  <section id="gallery" className="max-w-6xl mx-auto px-6 py-16 pb-24 animate-[fadeInUp_1s_ease_forwards]">
   <h2 className="text-3xl mb-8 tracking-[0.14em] text-amber-200 border-b border-amber-200/30 pb-2">Gallery</h2>
   <div className="grid md:grid-cols-3 gap-5">
    {[1,2,3,4,5,6].map(i=><div key={i} className="h-52 rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center text-neutral-500">SS画像 {i}</div>)}
   </div>
  </section>
 </main>
 )
}


