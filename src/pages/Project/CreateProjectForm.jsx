import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input'; // Ensure Input component is correctly imported
import { DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Cross1Icon } from '@radix-ui/react-icons';

import { tags } from '../ProjectList/ProjectList';

const CreateProjectForm = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            category: "",
            tags: ["javascript", "react"]
        }
    });

    const handleTagsChange = (newValue) => {
        
        const currentTags = form.getValues("tags");

        const updatedTags = currentTags.includes(newValue)
            ? currentTags.filter(tag => tag !== newValue)
            : [...currentTags, newValue];

        form.setValue("tags", updatedTags);
    };

    const onSubmit = (data) => {
        console.log('create project data', data);
    };

    const hasReachedProjectLimit = false; // Replace this with the actual condition to check project limit

    return (
        <div>
            <FormProvider {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="Project name..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="Project description..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select
                                        value={field.value}
                                        onValueChange={(value) => field.onChange(value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Category" />
                                        </SelectTrigger>

                                        <SelectContent>
                                            <SelectItem value="fullstack">Full Stack</SelectItem>
                                            <SelectItem value="frontend">FrontEnd</SelectItem>
                                            <SelectItem value="backend">BackEnd</SelectItem>
                                        </SelectContent>

                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => handleTagsChange(value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Tags" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {tags.map((item) => (
                                                <SelectItem key={item} value={item}>{item}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <div className="flex gap-1 flex-wrap mt-2">
                                    {field.value.map((item) => (
                                        <div
                                            key={item}
                                            onClick={() => handleTagsChange(item)}
                                            className="cursor-pointer flex rounded-full items-center border gap-2 px-4 py-1"
                                        >
                                            <span className="text-sm">{item}</span>
                                            <Cross1Icon className='h-3 w-3' />
                                        </div>
                                    ))}
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <DialogClose>
                        {hasReachedProjectLimit ? (
                            <div>
                                <p>You can create only 3 projects with the free plan. Please upgrade your plan.</p>
                            </div>
                        ) : (
                            <Button type="submit" className="w-full mt-5">
                                Create Project
                            </Button>
                        )}
                    </DialogClose>

                </form>
            </FormProvider>
        </div>
    );
};

export default CreateProjectForm;
