import { Badge } from "@/components/ui/badge";
import { TabsList } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Item } from "@radix-ui/react-dropdown-menu";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Tabs, TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { useParams } from "react-router-dom"
import CreateCommentForm from "./CreateCommentForm";
import { Button } from "@/components/ui/button"
import CommentCard from "./CommentCard";


const IssueDetails = () => {
    const {projectId,issueId}=useParams();
    const handleUpdateIssueStatus =(status) =>{ 
        console.log(status);
    }
  return (
    <div className="px-20 py-8 text-gray-400">
        <div className="flex justify-between border p-10 rounded-lg">
            <ScrollArea className="h-[80vh] w-[60%]">
             <div>
                    <h1 className="text-lg font-semibold text-gray-400">create navbar</h1>
               
                <div className="py-5">
                    <h2 className="font-semibold text-gray-400">Description</h2>
                    <p className="text-gray-400 text-sm mt-3">
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>

                </div>
                <div className="mt-5 ">
                    <h1 className="pb-3">Activity</h1>
                    <Tabs defaultValue="comment" className="w-[400px]">
                        <TabsList className="mb-5">
                            <TabsTrigger value="all">
                                All
                            </TabsTrigger>
                            <TabsTrigger value="comments">
                                Comments
                            </TabsTrigger>
                            <TabsTrigger value="history">
                                History 
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">
                            All Make Changes to your account here.
                        </TabsContent>
                        <TabsContent value="comments">
                            <CreateCommentForm issueId={issueId}/>
                            <div className="mt-8 space-y-6">

                            {[1,1,1].map((item)=><CommentCard key={item}/>)}

                            </div>
                        </TabsContent>
                        <TabsContent value="history">
                            History Change your password here.
                        </TabsContent>
                       
                    </Tabs>
                </div>
            </div>
            </ScrollArea>
            <div className="w-full lg:w-[30%] space-y-2">
              
                <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="To Do" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="pending">To Do</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
            </SelectContent>
            </Select>
            <div className="border rounded-lg">
                <p className="border-b py-3 px-3">Details</p>

                <div className="p-5">
                    <div className="space-y-7">
                        <div className="flex gap-10 items-center">
                            <p className="w-[7rem]">Assignee</p>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8 text-xs">
                                    <AvatarFallback>
                                        U
                                    </AvatarFallback>
                                </Avatar>
                                <p>User</p>
                            </div>
                        </div>
                        <div className="flex gap-10 items-center">
                            <p className="w-[7rem]">Lables</p>
                           <p>None</p>
                        </div>
                        <div className="flex gap-10 items-center">
                            <p className="w-[7rem]">Status</p>
                           <Badge>
                            in_progress
                           </Badge>
                        </div>
                        <div className="flex gap-10 items-center">
                            <p className="w-[7rem]">Release</p>
                           <p>01-01-2024</p>
                        </div>
                        <div className="flex gap-10 items-center">
                            <p className="w-[7rem]">Reporter</p>
                            <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8 text-xs">
                                    <AvatarFallback>
                                        R
                                    </AvatarFallback>
                                </Avatar>
                                <p>Reporter_Name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

               
            </div>
        </div>
     
    </div>
  )
}

export default IssueDetails
