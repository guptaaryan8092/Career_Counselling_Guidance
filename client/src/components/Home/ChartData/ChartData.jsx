import React from 'react'
import { Bar, BarChart } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/charts"

function ChartData() {
  return (
    <ChartContainer>
      <BarChart data={data}>
        <Bar dataKey="value" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  )
}

export default ChartData