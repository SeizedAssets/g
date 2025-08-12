"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { MoonIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

export function ThemeSwitcher() {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    setTheme("dark")
  }, [setTheme])

  return (
    <div className="flex gap-0.5 rounded-full border border-gray-800 bg-black p-1 text-center">
      <Button
        variant="ghost"
        size="sm"
        className="!flex !size-6 items-center justify-center rounded-full !p-[3px] text-orange-500 bg-gray-900"
        onClick={() => setTheme("dark")}
      >
        <MoonIcon color="currentColor" height={16} width={16} />
      </Button>
    </div>
  )
}
