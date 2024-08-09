import { AvatarFallback } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar } from '@/components/ui/avatar'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { PlusIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import ChatBox from './ChatBox'
import IssueList from './IssueList'
import InviteUserForm from './InviteUserForm'
const ProjectDetails = () => {
    const handleProjectInvitation=()=>{

    }
    return (
        <div className="mt-5 lg:px-10">
            <div className="lg:flex gap-5 justify-between pb-4"></div>
     <ScrollArea className='h-screen lg:w-[69%] pr-2'>
        <div className="text-gray-400 pb-10 w-full">
            <h1 className='text-lg font-semibold pb-5'>Build Social Media App</h1>
            <div className='space-y-5 pb-10 text-sm'>
            <p className='w-full md:max-w-lg lg:max-w-xl '>
            A platform to connect with friends and family, share updates, and engage with content in a visually appealing and user-friendly interface.'
            </p>

<div className='flex'>
    <p className='w-36'>Project Lead :</p>
    <p>UserName</p>

</div>
<div className='flex'>
                                    <p className='w-36'>Members :</p>
                                    <div className='flex items-center gap-2'>
                                        {[1, 1, 1, 1].map((item) => <Avatar className='cursor-pointer' key={item}>
                                            <AvatarFallback>Z</AvatarFallback>
                                        </Avatar>)}
                                    </div>

<div>
    <Dialog>
        <DialogTrigger>
        <DialogClose>
<Button  size="sm" variant ="outline" onClick={handleProjectInvitation}className="ml-2">
    <span>invite</span>
    <PlusIcon className='w-3 h-3'></PlusIcon>
</Button>
</DialogClose>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>  Invite User</DialogHeader>
            <InviteUserForm />
        </DialogContent>
        
    </Dialog>
</div>
</div>
<div className='flex'>
    <p className='w-36'>Categegory:</p>
    <p>FullStack</p>

</div>
<div className='flex'>
    <p className='w-36'>Status :</p>
 <Badge>is in progress</Badge>

</div>
        </div>
        <section> 
            <p className='py-5 border-b text-lg tracking-wider'>Tasks</p>
            <div className='lg:flex md:fflex gap-3 justify-between py-5 '>
             <IssueList status="pending" title="Todo List"/>
             <IssueList status="in_progress" title="In progress"/>
             <IssueList status="done" title="Done"/>
            </div>
        </section>
        </div>
        
     </ScrollArea>
     <div className="absolute top-20 right-0 m-5 lg:w-[30%] z-50 rounded-md stickyright-5 top-10">
    
        <ChatBox/>
     </div>
        </div>
        
    )
}
export default ProjectDetails 