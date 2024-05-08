import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChevronUpIcon } from "lucide-react";
import AlreadyAuthHeader from "@/components/alreadyAuthHeader";


export default function HomePage() {
  return (
    <div>
      <AlreadyAuthHeader />
      <main className="">
        <div className="p-10">
          <div className="flex flex-col md:flex-row gap-9 justify-start align-center">
            <div>
              <Card className="flex flex-col items-start">
                <CardHeader>
                  <CardTitle>Resumo diário</CardTitle>
                  <CardDescription>Seus ganhos hoje</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row items-center gap-4">
                  <p className="text-3xl font-semibold">R$ <span>1.1K</span></p>
                  <ChevronUpIcon color="#08ff00" size={38} />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="flex flex-col items-start">
                <CardHeader>
                  <CardTitle>Resumo mensal</CardTitle>
                  <CardDescription>Seus ganhos deste mês</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row items-center gap-4">
                  <p className="text-3xl font-semibold">R$ <span>29.1K</span></p>
                  <ChevronUpIcon color="#08ff00" size={38} />
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="flex flex-col items-start">
                <CardHeader>
                  <CardTitle>Melhora</CardTitle>
                  <CardDescription>Sua melhora em relação mês anterior</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-row items-center gap-4">
                  <p className="text-3xl font-semibold"><span>129%</span></p>
                  <ChevronUpIcon color="#08ff00" size={38} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
