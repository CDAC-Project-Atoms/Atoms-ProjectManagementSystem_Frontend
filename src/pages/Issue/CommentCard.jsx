import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { deleteComment } from "@/redux/Comment/comment.action";
import { TrashIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";

const CommentCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleDeleteComment = () => {
    dispatch(deleteComment(item.id));
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>{item.user.fullName[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p>{item.user.fullName}</p>
          <p>{item.content}</p>
        </div>
      </div>
      <Button
        onClick={handleDeleteComment}
        className="rounded-full"
        variant="ghost"
        size="icon"
      >
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CommentCard;
