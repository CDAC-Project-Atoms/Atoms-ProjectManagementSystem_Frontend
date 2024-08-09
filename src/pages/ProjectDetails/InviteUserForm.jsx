import React from 'react'


import { useForm, FormProvider } from "react-hook-form";
import { Input } from '@/components/ui/input'; // Make sure Input is properly imported
import { FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form'; // Ensure these are properly imported
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';

const InviteUserForm = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            
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
    return(
        <div>
            <FormProvider {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="User Email..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                   
                    
                    <DialogClose>
                        
                            <Button type="submit" className="w-full mt-5">
                                Invite User
                            </Button>
                        
                    </DialogClose>
                </form>
            </FormProvider>
        </div>
    )
}

export default InviteUserForm 