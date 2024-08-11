import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  fetchChatByProject,
  fetchChatMessages,
  messageRecived,
  sendMessage,
} from "@/redux/Chat/Action";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const { chat, auth } = useSelector((store) => store);
  const chatContainerRef = useRef(null);

  const handleMessageChange = (e) => setMessage(e.target.value);

  useEffect(() => {
    dispatch(fetchChatByProject(id));
  }, []);

  useEffect(() => {
    if (chat.chat) {
      dispatch(fetchChatMessages(chat.chat?.id));
    }
  }, [chat.chat]);

  const handleSendMessage = () => {
    dispatch(
      sendMessage({
        message: {
          senderId: auth.user?.id,
          projectId: id,
          content: message,
        },
        sendToServer: sendMessageToServer,
      })
    );
    setMessage("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat.messages]);

  // ---------------------------------

  // const [stompClient, setStompClient] = useState(null);
  // // const [messages, setMessages] = useState([]);

  // const onConnect = (frem) => {
  //   console.log("connect frem : ", frem);
  // };
  // const onErr = (err) => {
  //   console.log("error when connect ", err);
  // };
  // useEffect(() => {
  //   const sock = new SockJS("http://localhost:5454/ws");
  //   const stomp = Stomp.over(sock);
  //   setStompClient(stomp);

  //   stomp.connect({}, onConnect, onErr);

  //   // return () => {
  //   //   if (stomp) {
  //   //     stomp.disconnect();
  //   //   }
  //   // };
  // }, []);

  // useEffect(() => {
  //   if (stompClient && auth.reqUser && chat.chat) {
  //     const subscription = stompClient.subscribe(
  //       `/user/${chat.chat?.id}/private`,
  //       onMessageRecive
  //     );

  //     return () => {
  //       subscription.unsubscribe();
  //     };
  //   }
  // });

  // const onMessageRecive = (payload) => {
  //   console.log("onMessageRecive ............. -----------", payload);

  //   console.log("recive message -  - - - - - - -  -", JSON.parse(payload.body));

  //   const recievedMessage = JSON.parse(payload.body);

  //   dispatch(messageRecived(recievedMessage))
  //   setMessages([...messages, recievedMessage]);
  // };

  const sendMessageToServer = (message) => {
    console.log(message)
    // if (stompClient && message) {
    //   stompClient.send(
    //     `/app/chat/${chat.chat?.id.toString()}`,
    //     {},
    //     JSON.stringify(message)
    //   );
    // }
  };

  // useEffect(() => {
  //   // Scroll to the bottom when 'messages' change or component mounts
  //   if (chatContainerRef.current) {
  //     chatContainerRef.current.scrollTop =
  //       chatContainerRef.current.scrollHeight;
  //   }
  // }, [messages]);

  
  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>
        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
          {/* <div>
            <p className="py-2 px-5 border rounded-se-xl rounded-s-xl">you message</p>
          </div> */}

          {chat.messages?.map((item, i) =>
            item.sender.id == auth.user.id ? (
              <div
                ref={chatContainerRef}
                key={item}
                className="flex gap-2 mb-2"
              >
                <Avatar>
                  <AvatarFallback>{item.sender.fullName[0]}</AvatarFallback>
                </Avatar>
                <div
                  className={`space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl`}
                >
                  <p>{item.sender?.fullName}</p>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ) : (
              <div
                ref={chatContainerRef}
                key={item}
                className="flex mb-2 gap-2 justify-end "
              >
                <div
                  className={`space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl`}
                >
                  <p>{item.sender?.fullName}</p>
                  <p className="text-gray-300">{item.content}</p>
                </div>
                <Avatar>
                  <AvatarFallback>{item.sender.fullName[0]}</AvatarFallback>
                </Avatar>
              </div>
            )
          )}
        </ScrollArea>
        <div className="relative p-0">
          <Input
            value={message}
            onChange={handleMessageChange}
            placeholder="type message..."
            className="py-7 border-t outline-none  focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
          />
          <Button
            onClick={handleSendMessage}
            className="absolute right-2 top-3 rounded-full"
            size="icon"
            variant="ghost"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
