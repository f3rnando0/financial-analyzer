import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sparkle } from "lucide-react";

export default function TransactionsChart({ chartData }: any) {
  const data = [
    { name: "Dom", Valor: 1200 },
    { name: "Seg", Valor: 2100 },
    { name: "Ter", Valor: 800 },
    { name: "Qua", Valor: 1600 },
    { name: "Qui", Valor: 900 },
    { name: "Sex", Valor: 1700 },
    { name: "Sab", Valor: 1700 },
  ];

  return (
    <div className="flex-1 p-10">
      <div className="flex flex-row items-center justify-between">
        <div className="mb-4 font-semibold">Entradas nos ultimos 7 dias</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <div className="flex flex-row items-center gap-1">
                <Sparkle size={15} className="m-0" />
                Filtrar
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Ordem</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>7 dias</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>30 dias</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>90 dias</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={500}
          height={500}
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="valor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0f172a" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1e293b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            stroke="white"
            interval={0}
            tick={{ fontSize: 10 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b",
              border: "none",
              borderRadius: "7px",
            }}
            separator=": R$ "
          />
          <Area
            type="monotone"
            dataKey="Valor"
            stroke="white"
            fillOpacity={1}
            fill="url(#valor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
