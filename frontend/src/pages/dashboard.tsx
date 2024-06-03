//@ts-nocheck
import Head from "next/head";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/tabs";
import { Overview } from "../components/widgets/overview";
import { PlantHealth } from "../components/widgets/plant-health";
import { FloatingNav } from "~/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

function NewlineText(props : any) {
  const text = props.text;
  const newText = text.split('\n').map(str => <p>{str}</p>);
  return newText;
}

export default function Dashboard() {
    const navItems = [
        {
            name: "Home",
            link: "/#home",
            icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
            {
                name: "About",
                link: "/#about",
                icon: (
                    <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
                ),
            },
            {
                name: "Contact",
                link: "mailto:p.thanosan23@gmail.com",
                icon: (
                    <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
                ),
            },
    ];

    const [recommendation, setRecommendation] = useState("");
    const [loading, setLoading] = useState(true);

    const ollama = new ChatOllama({
        baseUrl: "http://localhost:11434",
        model: "tinyllama"
    });

    const prompt = ChatPromptTemplate.fromMessages([
      ["system", "You are a world class gardening consultant. You know how to improve people's gardens really well. Do not let the user know that you are a machine. At the beginning of your response, do not say 'certainly' or anything along those lines; get right into the response."],
      ["user", "{input}"],
    ]);

    const chain = prompt.pipe(ollama).pipe(new StringOutputParser());

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            let res = await chain
                .invoke({input: "How can I improve my garden?"});
            console.log(res)
            setRecommendation(res);
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <>
            <Head>
                <title>Dashboard | Flourish</title>
                <meta name="description" content="Flourish" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-[60rem]">
                <div className="md:hidden">
                    <Image
                        src=""
                        width={1280}
                        height={866}
                        alt="Dashboard"
                        className="block dark:hidden"
                    />
                    <Image
                        src=""
                        width={1280}
                        height={866}
                        alt="Dashboard"
                        className="hidden dark:block"
                    />
                </div>
                <div className="hidden flex-col md:flex">
                    <div className="">
                        <div className="flex h-16 items-center px-4">
                            <div className="ml-auto flex items-center space-x-4">
                                <FloatingNav navItems={navItems}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-4 p-8 pt-6">
                        <div className="flex items-center justify-between space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                            <div className="flex items-center space-x-2">
                                {/* <CalendarDateRangePicker /> */}
                            </div>
                        </div>
                        <Tabs defaultValue="overview" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="recommendation">Recommendation</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Light Exposure Hours
                                            </CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="text-muted-foreground h-4 w-4"
                                            >
                                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">9</div>
                                            <p className="text-muted-foreground text-xs">
                                                1 more hour than the last month
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Current Humidity
                                            </CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="text-muted-foreground h-4 w-4"
                                            >
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                <circle cx="9" cy="7" r="4" />
                                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">93%</div>
                                            <p className="text-muted-foreground text-xs">
                                                -3% from the last hour
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Soil Moisture
                                            </CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="text-muted-foreground h-4 w-4"
                                            >
                                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                                <path d="M2 10h20" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">34</div>
                                            <p className="text-muted-foreground text-xs">
                                                +2% from last month
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Average Temperature
                                            </CardTitle>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                className="text-muted-foreground h-4 w-4"
                                            >
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                            </svg>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">21</div>
                                            <p className="text-muted-foreground text-xs">
                                                +2 since last hour
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                    <Card className="col-span-4">
                                        <CardHeader>
                                            <CardTitle>Overview</CardTitle>
                                        </CardHeader>
                                        <CardContent className="pl-2">
                                            <Overview />
                                        </CardContent>
                                    </Card>
                                    <Card className="col-span-3">
                                        <CardHeader>
                                            <CardTitle>Plant Health Status</CardTitle>
                                            <CardDescription>
                                                Your plants are doing fairly well.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <PlantHealth />
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="recommendation" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>How can I improve my garden?</CardTitle>
                                        <CardDescription>
                                            Learn how to improve your garden.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                            <div>
                                                { loading ?
                                                    <p>Loading...</p>
                                                    : <NewlineText text={recommendation}/> }
                                            </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </main>
        </>
    );
}
