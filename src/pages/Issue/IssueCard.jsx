/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";

  
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import UserList from "./UserList";
import { useDispatch } from "react-redux";
import { deleteIssue } from "@/redux/Issue/Issue.action";
import { useNavigate, useParams } from "react-router-dom";

const IssueCard = ({item}) => {
  const dispatch=useDispatch();
  const {id}=useParams()
  const navigate=useNavigate();

  const handleDelete=()=>{
    dispatch(deleteIssue(item.id))
  }
  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="py-0 pb-1">
        <div className="flex justify-between items-center">
          <CardTitle className="cursor-pointer hover:text-gray-300" onClick={()=>navigate(`/project/${id}/issue/${item.id}`)}>{item.title}</CardTitle>

          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <Button
                className="rounded-full focus:outline-none"
                variant="ghost"
                size="icon"
              >
                <DotsVerticalIcon />{" "}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex items-center justify-between">
          <p>FBP - {1}</p>
          
            <DropdownMenu className="w-[30rem] border border-red-400">
              <DropdownMenuTrigger>
                <Button
                  className="bg-gray-900 hover:text-black text-white rounded-full"
                  size="icon"
                >
                    <Avatar>
                      <AvatarFallback>{
                        item.assignee?.fullName[0].toUpperCase() ||
                        <PersonIcon/>
                        }</AvatarFallback>  
                    </Avatar>
                  
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <UserList issueDetails={item}/>
              </DropdownMenuContent>
            </DropdownMenu>
        
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueCard;
