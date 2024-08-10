 import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input'; // Ensure Input component is imported
import React, { useState } from 'react'; // Import useState

const ChatBox = () => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        console.log("message", message);
        setMessage(""); // Clear message after sending
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className='sticky'>
            <div className='border rounded-lg'>
                <h1 className='border-b p-5'>Chat Box</h1>
                <ScrollArea className="h-[32rem] w-full p-5 flex flex-col gap-3">
                    {[1, 2, 3, 4].map((item, index) => (
                        index % 2 === 0 ? (
                            <div className='flex gap-2 mb-2 border p-2 rounded-lg justify-start' key={item}>
                                <Avatar>
                                    <AvatarFallback>R</AvatarFallback>
                                </Avatar>
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>UserName</p>
                                    <p className='text-grey-300'>How are you?</p>
                                </div>
                            </div>
                        ) : (
                            <div className='flex gap-2 mb-2 border p-2 rounded-lg justify-end' key={item}>
                                <Avatar>
                                    <AvatarFallback>R</AvatarFallback>
                                </Avatar>
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>UserName</p>
                                    <p className='text-grey-300'>How are you?</p>
                                </div>
                            </div>
                        )
                    ))}
                </ScrollArea>
                <div className="relative p-0">
                    <Input 
                        placeholder="Type message" 
                        className="py-2 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
                        value={message} 
                        onChange={handleMessageChange}
                    />
                    <Button 
                        onClick={handleSendMessage} 
                        className="absolute right-2 top-3 rounded-full" 
                        size="icon" 
                        variant="ghost" // Corrected typo
                    >
                        <PaperPlaneIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
