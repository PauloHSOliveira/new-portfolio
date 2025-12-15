'use client'

import type React from 'react'
import { useEffect, useState } from 'react'

const TerminalHeader: React.FC = () => {
  const [telemetry, setTelemetry] = useState({ cpu: 1.2, ram: 42 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        cpu: parseFloat((Math.random() * 5 + 1).toFixed(1)),
        ram: Math.floor(Math.random() * 10 + 40),
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-[#333] rounded-t-lg">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-[#ff5f56] rounded-full shadow-[0_0_5px_rgba(255,95,86,0.3)]"></div>
        <div className="w-3 h-3 bg-[#ffbd2e] rounded-full shadow-[0_0_5px_rgba(255,189,46,0.3)]"></div>
        <div className="w-3 h-3 bg-[#27c93f] rounded-full shadow-[0_0_5px_rgba(39,201,63,0.3)]"></div>
      </div>
      <div className="flex items-center gap-6 text-[9px] text-[#444] font-mono tracking-widest uppercase font-bold">
        <span className="hidden sm:block">
          paulo-oliveira-portfolio — bash — 80x24
        </span>
        <div className="flex gap-4 border-l border-[#333] pl-4">
          <span className="flex items-center gap-1">
            CPU:{' '}
            <span className="text-[#00ff00] tabular-nums">
              {telemetry.cpu}%
            </span>
          </span>
          <span className="flex items-center gap-1">
            MEM:{' '}
            <span className="text-[#00ff00] tabular-nums">
              {telemetry.ram}MB
            </span>
          </span>
        </div>
      </div>
      <div className="w-4"></div>
    </div>
  )
}

export default TerminalHeader
