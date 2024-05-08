"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronUpIcon } from "lucide-react";
import AlreadyAuthHeader from "@/components/alreadyAuthHeader";
import TransactionsChart from "@/components/transactionsChart";

export default function HomePage() {
  return (
    <div>
      <AlreadyAuthHeader />
      <main className="">
        <div className="p-10">
          <div className="align-center flex flex-col justify-start gap-9 md:flex-row">
            <div>
              <Card className="flex w-80 flex-col items-start">
                <CardHeader>
                  <CardTitle>Resumo diário</CardTitle>
                  <CardDescription>Seus ganhos hoje</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row items-center gap-4">
                  <p className="text-3xl font-semibold">
                    R$ <span>1.1K</span>
                  </p>
                  <ChevronUpIcon color="#08ff00" size={38} />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="flex w-80 flex-col items-start">
                <CardHeader>
                  <CardTitle>Resumo mensal</CardTitle>
                  <CardDescription>Seus ganhos deste mês</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row items-center gap-4">
                  <p className="text-3xl font-semibold">
                    R$ <span>29.1K</span>
                  </p>
                  <ChevronUpIcon color="#08ff00" size={38} />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="flex w-80 flex-col items-start">
                <CardHeader>
                  <CardTitle>Melhora</CardTitle>
                  <CardDescription>
                    Sua melhora em relação mês anterior
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row items-center gap-4">
                  <p className="text-3xl font-semibold">
                    <span>129%</span>
                  </p>
                  <ChevronUpIcon color="#08ff00" size={38} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <TransactionsChart />
        </div>
      </main>
    </div>
  );
}
