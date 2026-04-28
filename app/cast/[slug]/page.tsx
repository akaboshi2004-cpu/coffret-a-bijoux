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
    <Link href='/' className='text-sm text-neutral-400'>← Homeへ戻る</Link>

    <div className='grid md:grid-cols-2 gap-8 mt-6'>
      <div className='h-[520px] rounded-3xl border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-500'>
        キャスト画像追加場所
      </div>

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

        <a href='https://x.com/' target='_blank' rel='noopener noreferrer'
          className='inline-block mt-8 px-5 py-3 rounded-2xl bg-amber-300 text-black'>
          個人Xを見る
        </a>
      </div>
    </div>
   </div>
  </main>
 )
}