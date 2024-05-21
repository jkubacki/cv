'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export default function DownloadPDFButton(){
  
  function handleClick() {
    window.open('Jakub Kubacki CV.pdf', '_blank')
  }

  return (
    <Button onClick={handleClick} className="px-2 py-1 print:hidden" variant={'outline'}>
      <Download width={20} strokeWidth={1} />
    </Button>
  )

}
