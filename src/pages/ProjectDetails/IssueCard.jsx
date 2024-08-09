import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import React from 'react';
import { Button } from '@/components/ui/button';
import { DotsVerticalIcon, PersonIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import UserList from './UserList'
const IssueCard = () => {
    return (
        <Card className="rounded-md py-1 pb-2">
            <CardHeader className="py-0 pb-1">
                <div className="flex justify-between items-center">
                    <CardTitle>
                        Create NavBar
                    </CardTitle>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button className="rounded-full" size="icon" variant="ghost">
                                <DotsVerticalIcon />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>
                            <DropdownMenuItem>In Progress</DropdownMenuItem>
                            <DropdownMenuItem>Done</DropdownMenuItem>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>
            <CardContent className="py-0">
                <div className='flex items-center justify-between'>
                    <p>FBP - {1}</p>
                    <DropdownMenu className="w-[30rem] border border-red-400">
                        <DropdownMenuTrigger>
                            <Button size="icon" className="bg-gray-900 hover:text-black text-white rounded-full">
                                <Avatar>
                                    <AvatarFallback>
                                        <PersonIcon />
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            
                            <DropdownMenuItem>
                                <UserList/>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardContent>
        </Card>
    );
};

export default IssueCard;
