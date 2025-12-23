'use client'

import type React from 'react'
import { useEffect, useState } from 'react'

const BOOT_LOGS = [
  'INITIALIZING PH_OS v2.5.0-STABLE...',
  'CHECKING SYSTEM INTEGRITY... [OK]',
  'LOADING KERNEL MODULES... [OK]',
  'MOUNTING SECURE_DATA_DRIVE... [OK]',
  'ESTABLISHING GITHUB_API_HANDSHAKE... [OK]',
  'FETCHING REPOSITORY_METADATA... [OK]',
  'DECRYPTING PORTFOLIO_MANIFEST... [OK]',
  'VALIDATING SENIOR_ENGINEER_CREDENTIALS... [OK]',
  'STARTING USER_INTERFACE_DAEMON...',
  'PH_OS READY.',
  'EXECUTING: init --portfolio',
]

interface BootSequenceProps {
  onComplete: () => void
}

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < BOOT_LOGS.length) {
      const timeout = setTimeout(
        () => {
          setLogs((prev) => [...prev, BOOT_LOGS[currentIndex]])
          setCurrentIndex((prev) => prev + 1)
        },
        currentIndex === BOOT_LOGS.length - 1 ? 1000 : 150
      )
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(onComplete, 800)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, onComplete])

  return (
    <div className="fixed inset-0 bg-[var(--terminal-bg-dark)] z-[100] flex items-center justify-center p-6 md:p-20 font-mono text-[var(--terminal-green)]">
      <div
        className="w-full max-w-2xl h-[400px] overflow-hidden flex flex-col justify-end"
        aria-live="polite"
      >
        <div className="space-y-1">
          {logs.map((log, i) => (
            <div key={log} className="text-sm md:text-base flex gap-4">
              <span className="opacity-30">
                [{new Date().toLocaleTimeString('en-US', { hour12: false })}]
              </span>
              <span
                className={
                  i === BOOT_LOGS.length - 1
                    ? 'font-bold text-[var(--terminal-text-primary)]'
                    : ''
                }
              >
                {i === BOOT_LOGS.length - 1 ? '> ' : ''}
                {log}
              </span>
            </div>
          ))}
          <div className="w-3 h-5 bg-[var(--terminal-green)] inline-block animate-pulse align-middle mt-2"></div>
        </div>
      </div>
    </div>
  )
}

export default BootSequence
