import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>The goal of this web app is to display a Payment Mortgage Calculator to give to the user the specific data about the amortization and other interesting amounts.</div>
      <div>This calculator was inspired by an MS Excel version of a Novarise calculator.</div>
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
      <div className="my-class">Please type in your mortgage date on the form.</div>
      <div className="grid grid-cols-1">
        <div className="flex flex-col md:flex-row py-1">
          <label className='pr-2'>Mortage Amount: </label>
          <input className='border-2 rounded-lg border-grey-300' id='mortgage-amount' type='text' ></input>
        </div>
        <div className="flex flex-col md:flex-row py-1">
          <label className='pr-2'>Interest Rate: </label>
          <input className='border-2 rounded-lg border-grey-300' id='interest-rate' type='text' ></input>
        </div>
        <div className="flex flex-col md:flex-row py-1">
          <label className='pr-2'>Mortage Length: </label>
          <input className='border-2 rounded-lg border-grey-300' id='mortgage-length' type='text' ></input>
        </div>
        <div className="flex flex-col md:flex-row py-1">
          <label className='pr-2'>Monthly Payment: </label>
          <input className='border-2 rounded-lg border-grey-300' id='monthly-payment' type='text' ></input>
        </div>
      </div>
      
    </main>
  )
}
