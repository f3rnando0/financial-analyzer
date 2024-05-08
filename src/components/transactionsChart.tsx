import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

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
      <div className="mb-4 font-semibold">Últimos 7 dias</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={400}
          height={400}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="valor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0f172a" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1e293b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="white" />
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
