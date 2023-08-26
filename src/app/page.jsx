
import Image from 'next/image'
import Navbar from "@/components/Navbar"
import SectionAbout from "@/components/SectionAbout"
import Stack from '@/components/Stack'

export default function Home() {
  return (
    <>
    <div className='h-screen flex flex-col'>
      <Navbar/>
      <SectionAbout/>
    </div>
       <Stack/>
    </>
  )
}
