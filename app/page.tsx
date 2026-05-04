'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Cinzel, Noto_Serif_JP } from 'next/font/google'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400','600','700'] })
const noto = Noto_Serif_JP({ subsets: ['latin'], weight: ['400','500','700'] })

const fadeInUp={initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:0.8},viewport:{once:true,amount:0.2}}

export default function Page(){
 const [loading,setLoading]=useState(true)

 useEffect(()=>{
  const t=setTimeout(()=>setLoading(false),1500)
  return ()=>clearTimeout(t)
 },[])

 if(loading){
  return (
   <main className="min-h-screen bg-black text-white flex items-center justify-center">
    <p>Loading...</p>
   </main>
  )
 }

 return (
 <main className={`${noto.className} bg-[#0b0f2a] text-white`}>

  {/* ===== KV（キービジュアル） ===== */}
  <section className="relative w-full h-[720px]">
    <Image src="/kv.jpg" alt="KV" fill className="object-cover" />

    {/* 軽めオーバーレイ（重要：暗くしすぎない） */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0b0f2a]" />

    {/* タイトル */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 className={`${cinzel.className} text-5xl md:text-7xl tracking-[0.2em]`}>coffret à bijoux</h1>
      <p className="mt-6 max-w-xl text-sm text-blue-200">夜空に煌めく、秘密の店へようこそ</p>
    </div>
  </section>


  {/* ===== メニュー構成（画像風レイアウト） ===== */}
  <section className="max-w-6xl mx-auto px-6 py-20">

    {/* 上部：左右カード */}
    <div className="grid md:grid-cols-3 gap-6 mb-10">

      {/* 左：特典 */}
      <div className="bg-[#11163a] rounded-2xl p-6 border border-white/10">
        <h3 className="mb-4 text-lg text-blue-200">SPECIAL GIFT</h3>
        <p className="text-sm text-neutral-300">来店特典などの説明エリア</p>
      </div>

      {/* 中央：メインビジュアル */}
      <div className="relative h-[360px] rounded-2xl overflow-hidden border border-white/10">
        <Image src="/main.jpg" alt="main" fill className="object-cover" />
      </div>

      {/* 右：ノベルティ */}
      <div className="bg-[#11163a] rounded-2xl p-6 border border-white/10">
        <h3 className="mb-4 text-lg text-blue-200">NOVELTY</h3>
        <p className="text-sm text-neutral-300">グッズ情報など</p>
      </div>

    </div>

    {/* 下部：メニュー */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* Sweets */}
      <div className="bg-[#11163a] rounded-2xl p-6 border border-white/10">
        <h3 className="mb-6 text-xl text-blue-200">Sweets</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3].map(i=>(
            <div key={i} className="h-40 bg-black/40 rounded-xl flex items-center justify-center text-xs">Item {i}</div>
          ))}
        </div>
      </div>

      {/* Drinks */}
      <div className="bg-[#11163a] rounded-2xl p-6 border border-white/10">
        <h3 className="mb-6 text-xl text-blue-200">Drinks</h3>
        <div className="grid grid-cols-2 gap-4">
          {[1,2,3].map(i=>(
            <div key={i} className="h-40 bg-black/40 rounded-xl flex items-center justify-center text-xs">Drink {i}</div>
          ))}
        </div>
      </div>

    </div>

  </section>


  {/* ===== フッター的情報 ===== */}
  <section className="text-center pb-16">
    <p className="text-sm text-neutral-400">Elemental / Gungnir / Lavender Beds</p>
    <p className="text-xs text-neutral-500 mt-2">OPEN 22:00 - CLOSE 24:00</p>
  </section>

 </main>
 )
}
