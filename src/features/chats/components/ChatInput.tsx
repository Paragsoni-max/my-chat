import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { LinkIcon, SendHorizonal } from 'lucide-react'
import Form from 'next/form'
import React from 'react'
import { CHAT_SEND_ACTION } from '../actions/chat_actions'

const ChatInput = () => {
    return (
        <Form action={CHAT_SEND_ACTION} className='relative flex gap-4 items-center'>
           <Textarea name='message' id="textarea-17" className="[resize:none] py-3 md:pe-14 pe-8 md:pl-4 pl-2" placeholder="Type your message here..." />
            <div className='w-fit h-fit center absolute md:right-[4.5rem] right-16 bottom-0 my-auto'>
                <Label htmlFor="input-30" className="p-2">
                    <LinkIcon color='black' className='cursor-pointer w-6 h-6' />
                </Label>
                <input id="input-30" className="hidden" type="file" />
            </div>
            <button className='w-14 h-12 rounded-md bg-navbg center' type='submit'>
                <SendHorizonal color='white' />
            </button>
        </Form>
    )
}

export default ChatInput

