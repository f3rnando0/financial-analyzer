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


export default function HomePage() {
  return (
    <main className="">
      <header>
        <div className="flex">
          <div>
            <Card className="flex flex-col items-start">
              <CardHeader>
                <CardTitle>Resumo mensal</CardTitle>
                <CardDescription>Seus ganhos deste mês</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-row items-center gap-4">
                <p className="text-3xl font-semibold">R$ <span>29.1K</span></p>
                <ChevronUpIcon color="#08ff00" size={38}/>
              </CardContent>
            </Card>

          </div>
        </div>
      </header>
    </main>
  );
}
