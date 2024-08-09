import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import IssueCard from './IssueCard';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import CreateIssueForm from './CreateIssueForm';

const IssueList = ({ title, status }) => {
    return (
        <div>
            <Card className="w-full md:w-[300px] lg:w-[310px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="px-2">
                    <div className='space-y-2'>
                      {[1,1,1].map((item)=> <IssueCard key={item} />)}  

                    </div>
                </CardContent>
                <CardFooter>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="w-full border flex items-center gap-2">
                                <PlusIcon /> Create Issue
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle>Create New Issue</DialogTitle>
                            <CreateIssueForm />
                        </DialogContent>
                    </Dialog>
                </CardFooter>
            </Card>
        </div>
    );
};

export default IssueList;
