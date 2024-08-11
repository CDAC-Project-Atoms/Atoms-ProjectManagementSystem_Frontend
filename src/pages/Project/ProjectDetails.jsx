import { ScrollArea } from "@/components/ui/scroll-area";
import { IssueList } from "../Issue/IssueList";
import ChatBox from "./ChatBox";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProjectById,
  inviteToProject,
} from "@/redux/Project/Project.Action";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Loader from "../Loader/Loader";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import InviteUserForm from "./InviteUserForm";

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { project,auth } = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, [id]);

  const handleProjectInvitation = () => {
    dispatch(inviteToProject({ email: "", projectId: id }));
  };
  return (
    <>
      {!project.loading ? (
        <div className="mt-5 lg:px-10 ">
          <div className="lg:flex gap-5 justify-between pb-4">
            <ScrollArea className="h-screen lg:w-[69%] pr-2">
              <div className="text-gray-400 pb-10 w-full">
                <h1 className="text-lg font-semibold pb-5">
                  {project.projectDetails?.name}
                </h1>

                <div className="space-y-5 pb-10">
                  <p className="w-full md:max-w-lg lg:max-w-xl">
                    {project.projectDetails?.description}
                  </p>
                  <div className="flex">
                    <p className="w-36">Project Lead : </p>
                    <p>{project.projectDetails?.owner?.fullName}</p>
                  </div>
                  <div className="flex">
                    <p className="w-36">Members : </p>
                    <div className="flex items-center gap-2">
                      {project.projectDetails?.team.map((item) => (
                        <Avatar className={`cursor-pointer`} key={item}>
                          <AvatarFallback>{item.fullName[0]?.toUpperCase()}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>

                   {auth.user?.id===project.projectDetails?.owner.id && <Dialog>
                      <DialogTrigger>
                      <DialogClose>
                        <Button
                          size="sm"
                          variant="outline"
                          className="ml-2"
                          onClick={handleProjectInvitation}
                        >
                          {" "}
                          <span className="pr-1">invite</span>
                          <PlusIcon className="w-3 h-3" />
                        </Button>
                      </DialogClose>
                        
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Invite User</DialogTitle>
                         
                        </DialogHeader>
                        <InviteUserForm projectId={id}/>
                      </DialogContent>
                    </Dialog>}
                  </div>
                  <div className="flex">
                    <p className="w-36">Category : </p>
                    <p>{project.projectDetails?.category}</p>
                  </div>
                  {/* <div className="flex">
                    <p className="w-36">Deadline : </p>
                    <p>Sun 5, jan</p>
                  </div> */}
                  <div className="flex">
                    <p className="w-36">Status : </p>
                    <Badge className={`bg-orange-300`}>In Progress</Badge>
                  </div>
                </div>

                <section>
                  <p className="py-5 border-b text-lg tracking-wider">Tasks</p>
                  <div className="lg:flex md:flex gap-3 justify-between py-5">
                    <IssueList status="pending" title={"Todo List"} />

                    <IssueList status="in_progress" title={"In Progress"} />

                    <IssueList status="done" title={"Done"} />
                  </div>
                </section>
              </div>
            </ScrollArea>

            <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
              <ChatBox />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
