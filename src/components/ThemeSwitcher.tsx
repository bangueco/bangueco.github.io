"use client"

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaRegSun } from "react-icons/fa6";
import { IoMoon } from "react-icons/io5";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const onClickChangeColor = () => {
    resolvedTheme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div>
      <Switch
        defaultSelected={resolvedTheme === 'light'}
        size="lg"
        color="success"
        onClick={onClickChangeColor}
        startContent={<FaRegSun />}
        endContent={<IoMoon />}
        >
      </Switch>
    </div>
  )
}