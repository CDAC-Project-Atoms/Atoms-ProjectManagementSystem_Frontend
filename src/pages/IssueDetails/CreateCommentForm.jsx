import { FormField, FormItem } from "@/components/ui/form";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"


const CreateCommentForm = ({issueId}) => {
    const form = useForm({
        defaultValues: {
            content: "",
            
        },
    });

    const onSubmit = (data) => {
        console.log('create project data', data);
    };

  return (
    <div>
       <FormProvider {...form}>
                <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex gap-2">
                                <div>
                                    <Avatar>
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                </div>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="text"
                                        className="w-[20rem]"
                                        placeholder="Add Comment Here...."
                                    />
                                </FormControl>
                                </div>
                           
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                   
                    
                    
                            <Button type="submit">
                             Save
                            </Button>
                        
                   
                </form>
            </FormProvider>
    </div>
  )
}

export default CreateCommentForm
