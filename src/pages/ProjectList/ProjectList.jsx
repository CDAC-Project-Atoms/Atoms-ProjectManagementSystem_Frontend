import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Card } from '@/components/ui/card'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import { ScrollArea } from '@/components/ui/scroll-area'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group' // Ensure you have RadioGroupItem
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import ProjectCard from '../Project/ProjectCard'
import React, { useState } from 'react'
export const tags = [
    "all",
    "react",
    "nextjs",
    "spring boot",
    "bootstrap",
    "mysql",
    "mongodb",
    "angular",
    "python",
    "expressjs",
    "django",
]

const ProjectList = () => {

    const [keyword,setKeyword]=useState("");

    const handleFilterChange = (section, value) => {
        console.log("value", value, section)
    };
    const handleSearchChange = (e) => {
        setKeyword(e.target.value)
    }
    return (
        <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">

            {/* Filter Section */}

            <div className="filterSection"> {/* Changed Section to div */}

                <Card className="p-5 sticky top-10">

                    <div className='flex justify-between lg:w-[20rem]'>
                        <p className='text-xl -tracking-wider'>filters</p>
                        <Button variant="ghost" size="icon">
                            <MixerHorizontalIcon />
                        </Button>
                    </div>

                    <CardContent className="mt-5">
                        {/* Sidebar scroll */}
                        <ScrollArea className="space-y-7 h-[70vh]">

                            <div>
                                <h1 className='pb-3 text-grey-400 border-b'>
                                    Category
                                </h1>
                            </div>

                            <div className='pt-5'>
                                <RadioGroup className="space-y-3 pt-3" defaultvalue="all" onValueChange={(value) => handleFilterChange("category", value)}>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem value='all' id="r1" />
                                        <Label htmlFor="r1">All</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem value='fullstack' id="r2" />
                                        <Label htmlFor="r2">fullstack</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem value='frontend' id="r3" />
                                        <Label htmlFor="r3">frontend</Label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RadioGroupItem value='backend' id="r4" />
                                        <Label htmlFor="r4">backend</Label>
                                    </div>

                                    {/* Add more RadioGroupItems here as needed */}
                                </RadioGroup>
                            </div>



                            <div className="pt-9">
                                <h1 className='pb-3 text-grey-400 border-b'>
                                    Tag
                                </h1>
                            </div>
                            <div className='pt-5'>
                                <RadioGroup className="space-y-3 pt-3" defaultvalue="all" onValueChange={(value) => handleFilterChange("category", value)}>
                                    {tags.map((item) => <div key={item} className="flex items-center gap-2 ">
                                        <RadioGroupItem value={item} id={`r1-${item}`} />
                                        <Label htmlFor={`r1-${item}`}>{item}</Label>
                                    </div>)}


                                    {/* Add more RadioGroupItems here as needed */}
                                </RadioGroup>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>

            <div className="projectListSection w-full lg:w-[48rem]">
                {/* Content for projectListSection */}
                <div className="flex gap-2 items-center pb-5 justify-between">
                    <div className="relative p-0 w-full">
                        <Input
                            onChange={handleSearchChange}
                            placeholder="Search Project"
                            className="40% px-9" />
                        <MagnifyingGlassIcon className="absolute top-3 left-4" />

                    </div>

                </div>

                <div>
                    <div className="space-y-5 min-h-[74vh]">
                        {
                            keyword?[1,1,1].map((item)=><ProjectCard key={item}/>):[1,1,1,1].map((item)=><ProjectCard key={item}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList
