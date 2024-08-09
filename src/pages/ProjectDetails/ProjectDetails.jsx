import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogClose,DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'




import React from 'react'
import { PlusIcon } from '@radix-ui/react-icons'

const ProjectDetails = () => {
const handleProjectInvitation =()=>{

}

    return (
        <>
            <div className='mt-5 lg:px-10'>
                <div className='lg:flex gap-5 justify-between pb-4'>
                    <ScrollArea className='h-screen lg:w-[69%] pr-2'>
                        <div className='text-grey-400 pb-10 w-full'>
                            <h1 className='text-lg font-semibold pb-5'> Create Ecommerce Website Using React</h1>

                            <div className='space-y-5 pb-10'>
                                <p className='w-full md:max-w-lg lg:max-w-xl'>
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                </p>

                                <div className='flex'>
                                    <p className='w-36'>Project Lead :</p>
                                    <p>Username</p>
                                </div>

                                <div className='flex'>
                                    <p className='w-36'>Members :</p>
                                    <div className='flex items-center gap-2'>
                                        {[1, 1, 1, 1].map((item) => <Avatar className='cursor-pointer' key={item}>
                                            <AvatarFallback>Z</AvatarFallback>
                                        </Avatar>)}
                                    </div>

<Dialog>
    <DialogTrigger>
        <DialogClose>
            <Button size='sm' variant="outline" onClick={handleProjectInvitation} className='ml-2'>
                <span> invite</span>
                <PlusIcon className='w-3 h-3'/>
            </Button>
        </DialogClose>
    </DialogTrigger>

    
</Dialog>

                               </div>

                                <div className='flex'>
                                    <p className='w-36'>Category :</p>
                                    <p>fullstack</p>
                                </div>

                                <div className='flex'>
                                    <p className='w-36'>Project Lead :</p>
                                    <Badge>Username</Badge>
                                </div>

                            </div>

                        </div>

                    </ScrollArea>

                </div>

            </div>
        </>
    )
}

export default ProjectDetails
