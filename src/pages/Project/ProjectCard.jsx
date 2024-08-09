import React from 'react';
import { Card } from '@/components/ui/card';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {

    const navigate = useNavigate()
    return (
        <Card className="p-5 w-full lg:max-w-3xl">
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-5'>
                            <h1 onClick={()=>navigate("/project/1")} className='cursor-pointer font-bold text-lg'>
                                {project.title}
                            </h1>
                            <DotFilledIcon />
                            <p className='text-sm text-grey-400'>{project.category}</p>
                        </div>
                        <div>
                            <DropdownMenu>

                                <DropdownMenuTrigger>
                                    <Button className="rounded-full" variant="ghost" size="icon">
                                        <DotsVerticalIcon />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        Update
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                                
                            </DropdownMenu>
                        </div>
                    </div>
                    <p className='text-grey-500 text-sm'>{project.description}</p>
                </div>
                <div className='flex flex-wrap gap-2 items-center'>
                    {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">{tag}</Badge>
                    ))}
                </div>
            </div>
        </Card>
    );
};

const ProjectList = () => {
    const projects = [
        
        {
            title: 'Build Social Media App',
            category: 'frontend',
            description: 'A platform to connect with friends and family, share updates, and engage with content in a visually appealing and user-friendly interface.',
            tags: ['react', 'javascript', 'ui/ux', 'frontend']
        },
        {
            title: 'Develop Blogging Platform',
            category: 'backend',
            description: 'A robust and scalable blogging platform allowing users to create, edit, and manage their blogs with advanced features like SEO optimization and analytics.',
            tags: ['node.js', 'express', 'mongodb', 'backend']
        },
        {
            title: 'Create Project Management Tool',
            category: 'fullstack',
            description: 'An all-in-one project management tool to help teams plan, track, and deliver projects efficiently with features like task management, timelines, and reporting.',
            tags: ['angular', 'typescript', 'fullstack', 'project management']
        }
    ];

    return (
        <div className="space-y-5">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;
