import Link from 'next/link'

/*
追加ファイルも作成してください（手動）
app/cast/[slug]/page.tsx
下記コードを貼り付け用として末尾に追記しています。
*/

export default function Page(){
 const gems=[['larimar','ラリマー'],['ametrine','アメトリン'],['zoisite','ゾイサイト'],['starspinel','スタースピネル'],['prehnite','プレナイト'],['ruby','ルビー'],['sapphire','サファイア'],['topaz','インペリアルトパーズ']]
 return (
 <main className="min-h-screen bg-neutral-950 text-neutral-100">
  <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/70 backdrop-blur">
   <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl border border-neutral-700 flex items-center justify-center text-xs text-neutral-400">LOGO</div>
      <span className="tracking-[0.2em] text-sm">coffret à bijoux</span>
    </div>
    <div className="flex gap-4 text-sm flex-wrap justify-end">
      <a href="#home">Home</a>
      <a href="#staff">店員</a>
      <a href="#shop">お店/営業日</a>
      <a href="#gallery">Gallery</a>
      <a href="https://x.com/coffret_ff14/media" target="_blank" rel="noopener noreferrer">X</a>
    </div>
   </nav>
  </header>
{/* お店タイトル掲載 */}
  <section id="home" className="max-w-6xl mx-auto px-6 pt-8 pb-20">
   <div className="rounded-3xl overflow-hidden border border-neutral-800">
    <div className="h-56 md:h-80 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center text-neutral-400">
      <img src="/1500x500.jpg" alt="ヘッダー" className="w-full h-full object-cover" />
    </div>
   </div>
   <div className="relative mt-10 text-center">
    <div className="mx-auto w-28 h-28 rounded-3xl border border-neutral-700 flex items-center justify-center text-neutral-400">LOGO</div>
    <h1 className="text-5xl md:text-7xl mt-6">coffret à bijoux</h1>
    <p className="mt-6 max-w-2xl mx-auto text-neutral-300">木漏れ日の差す静かな宝石商。八つの輝きは今宵、メスラの姿を得て舞台へ現れる。</p>
   </div>
  </section>
{/* 店員プロフィール掲載 */}
  <section id="staff" className="max-w-6xl mx-auto px-6 py-16">
   <h2 className="text-3xl mb-8">店員 / Jewels</h2>
   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
    {gems.map(([slug,name])=>(
      <Link key={slug} href={`/cast/${slug}`} className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-5 block hover:-translate-y-1 transition">
        <div className="h-40 rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-900 mb-4 flex items-center justify-center text-sm text-neutral-400">画像追加場所</div>
        <h3 className="text-xl">{name}</h3>
        <div className={`mt-2 h-1 rounded-full ${slug==='larimar'?'bg-sky-300':slug==='ametrine'?'bg-yellow-300':slug==='zoisite'?'bg-green-500':slug==='starspinel'?'bg-pink-300':slug==='prehnite'?'bg-lime-300':slug==='ruby'?'bg-red-500':slug==='sapphire'?'bg-blue-500':'bg-amber-400'}`}></div>
        <p className="text-sm text-neutral-400 mt-2">紹介ページへ</p>
      </Link>
    ))}
   </div>
  </section>
{/* お店 / 営業日についての案内 */}
  <section id="shop" className="max-w-6xl mx-auto px-6 py-16">
   <div className="rounded-3xl border border-neutral-800 p-8 bg-neutral-900/60">
    <h2 className="text-3xl mb-4">お店 / 営業日</h2>
    <p>Elemental DC / Gungnir / Lavender Beds 22-3</p>
    <p className="mt-2">予約不要・自由来店 / ショー形式営業</p>
    <div className="mt-6 h-40 rounded-2xl border border-dashed border-neutral-700 flex items-center justify-center text-neutral-400">営業日カレンダー画像や告知を後日追加</div>
   </div>
  </section>

  <section id="gallery" className="max-w-6xl mx-auto px-6 py-16 pb-24">
   <h2 className="text-3xl mb-8">Gallery</h2>
   <div className="grid md:grid-cols-3 gap-5">
    {[1,2,3,4,5,6].map(i=><div key={i} className="h-52 rounded-3xl border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-500">SS画像 {i}</div>)}
   </div>
  </section>
 </main>
 )
}

/* ===== app/cast/[slug]/page.tsx =====
import Link from 'next/link'

const castData:any={
 larimar:{name:'ラリマー',call:'海の囁き',gem:'穏やかな海色を宿す宝石。癒しと安らぎの象徴。'},
 ametrine:{name:'アメトリン',call:'黄昏の双光',gem:'紫水晶と黄水晶が交わる神秘の宝石。'},
 zoisite:{name:'ゾイサイト',call:'深緑の知性',gem:'落ち着きと知性を思わせる深い輝き。'},
 starspinel:{name:'スタースピネル',call:'星影',gem:'光を受け星のようにきらめく石。'},
 prehnite:{name:'プレナイト',call:'朝露',gem:'柔らかな光を湛える癒しの宝石。'},
 ruby:{name:'ルビー',call:'紅蓮',gem:'情熱と誇りを象徴する赤き宝石。'},
 sapphire:{name:'サファイア',call:'蒼穹',gem:'誠実と静謐を映す青き宝石。'},
 topaz:{name:'インペリアルトパーズ',call:'王冠',gem:'黄金の威厳を宿す高貴な輝き。'}
}

export default async function CastPage({params}:any){
 const {slug}=await params
 const c=castData[slug]
 if(!c) return <main className='p-10 text-white'>Not Found</main>
 return (
 <main className='min-h-screen bg-neutral-950 text-neutral-100 px-6 py-10'>
  <div className='max-w-5xl mx-auto'>
   <Link href='/#staff' className='text-sm text-neutral-400'>← 店員ページへ戻る</Link>
   <div className='grid md:grid-cols-2 gap-8 mt-6'>
    <div className='h-[520px] rounded-3xl border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-500'>キャスト画像追加場所</div>
    <div>
      <p className='text-amber-300 tracking-[0.3em] text-xs'>JEWEL CAST</p>
      <h1 className='text-5xl mt-3'>{c.name}</h1>
      <p className='mt-3 text-neutral-400'>呼び名：{c.call}</p>
      <p className='mt-6 leading-8 text-neutral-300'>{c.gem}</p>
      <div className='mt-8 rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 leading-8 text-neutral-300'>
       初めまして、ようこそお越しくださいました。<br/>
       今宵は私の輝きを、どうぞ近くでご覧ください。<br/>
       宝石に秘められた物語も、お聞かせいたします。<br/>
       あなたの記憶に残る一夜となりますように。
      </div>
      <a href='https://x.com/' target='_blank' rel='noopener noreferrer' className='inline-block mt-8 px-5 py-3 rounded-2xl bg-amber-300 text-black'>個人Xを見る</a>
    </div>
   </div>
  </div>
 </main>
 )
}
===== */
