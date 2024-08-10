import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Form, FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';

const CreateIssueForm = () => {
    // Initializing the form with default values
    const form = useForm({
        defaultValues: {
            issueName: "",
            description: "",
        }
    });

    // Handler for form submission
    const onSubmit = (data) => {
        console.log('Form Data Submitted: ', data);
    };

    return (
        <div>
            <FormProvider {...form}>
                <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Field for Issue Name */}
                    <FormField
                        control={form.control}
                        name="issueName"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="border w-full border-gray-700 py-5 px-5"
                                        placeholder="Issue Name..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Field for Description */}
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
                                        placeholder="Description..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <DialogClose asChild>
                        <Button type="submit" className="w-full mt-5">
                            Create Issue
                        </Button>
                    </DialogClose>
                </form>
            </FormProvider>
        </div>
    );
};

export default CreateIssueForm;
