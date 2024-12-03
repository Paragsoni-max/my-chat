"use server"

const CHAT_SEND_ACTION = async (formData: FormData) => {
    console.log(formData.get('message'))
}

export { CHAT_SEND_ACTION }