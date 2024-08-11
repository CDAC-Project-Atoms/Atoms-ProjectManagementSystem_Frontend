import { Input } from "@/components/ui/input";
// import "./Login.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { login } from "@/redux/Auth/Action";
import { inviteToProject } from "@/redux/Project/Project.Action";

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
 
});
const InviteUserForm = ({projectId}) => {
  const dispatch=useDispatch();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      
    },
  });
  const onSubmit = (data) => {
    data.projectId=projectId
    dispatch(inviteToProject(data))
    
    console.log("sent invitation", data);

  };
  return (
    <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="border w-full border-gray-700 py-5 px-5"
                          placeholder="enter user email"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-slate-400 py-5">
                  SENT INVITATION
                </Button>
              </form>
            </Form>

         
          </div>
  );
};

export default InviteUserForm;
