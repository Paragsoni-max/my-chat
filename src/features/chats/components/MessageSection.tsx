import Image from "next/image";
import vercel from "../../../../public/globe.svg";
import { cn } from "@/lib/utils";

const MessageSection = () => {
    const messages = [
        {
            id: 1,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus iste, esse molestias alias eos animi dignissimos porro reprehenderit accusantium tempora inventore itaque ipsum? Commodi in blanditiis atque fugit praesentium molestiae inventore quis tempore. Illo omnis quibusdam rerum iste neque magnam molestias cumque, sint, necessitatibus consequuntur tenetur, laboriosam consectetur obcaecati unde libero dicta blanditiis! Voluptates natus officiis maxime adipisci repellat assumenda cumque iure totam fugiat delectus culpa, ullam unde perspiciatis asperiores nobis itaque modi corrupti ipsam, inventore tenetur reiciendis ratione doloremque quam? Tenetur fugit provident sit enim dolor nemo autem delectus. Provident a ratione excepturi obcaecati fugit quas, rerum cupiditate!"
        },
        {
            id: 2,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus iste, esse molestias alias eos animi dignissimos porro reprehenderit accusantium tempora inventore itaque ipsum? Commodi in blanditiis atque fugit praesentium molestiae inventore quis tempore. Illo omnis quibusdam rerum iste neque magnam molestias cumque, sint, necessitatibus consequuntur tenetur, laboriosam consectetur obcaecati unde libero dicta blanditiis! Voluptates natus officiis maxime adipisci repellat assumenda cumque iure totam fugiat delectus culpa, ullam unde perspiciatis asperiores nobis itaque modi corrupti ipsam, inventore tenetur reiciendis ratione doloremque quam? Tenetur fugit provident sit enim dolor nemo autem delectus. Provident a ratione excepturi obcaecati fugit quas, rerum cupiditate!"
        },
        {
            id: 3,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus iste, esse molestias alias eos animi dignissimos porro reprehenderit accusantium tempora inventore itaque ipsum? Commodi in blanditiis atque fugit praesentium molestiae inventore quis tempore. Illo omnis quibusdam rerum iste neque magnam molestias cumque, sint, necessitatibus consequuntur tenetur, laboriosam consectetur obcaecati unde libero dicta blanditiis! Voluptates natus officiis maxime adipisci repellat assumenda cumque iure totam fugiat delectus culpa, ullam unde perspiciatis asperiores nobis itaque modi corrupti ipsam, inventore tenetur reiciendis ratione doloremque quam? Tenetur fugit provident sit enim dolor nemo autem delectus. Provident a ratione excepturi obcaecati fugit quas, rerum cupiditate!"
        },
        {
            id: 4,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus iste, esse molestias alias eos animi dignissimos porro reprehenderit accusantium tempora inventore itaque ipsum? Commodi in blanditiis atque fugit praesentium molestiae inventore quis tempore. Illo omnis quibusdam rerum iste neque magnam molestias cumque, sint, necessitatibus consequuntur tenetur, laboriosam consectetur obcaecati unde libero dicta blanditiis! Voluptates natus officiis maxime adipisci repellat assumenda cumque iure totam fugiat delectus culpa, ullam unde perspiciatis asperiores nobis itaque modi corrupti ipsam, inventore tenetur reiciendis ratione doloremque quam? Tenetur fugit provident sit enim dolor nemo autem delectus. Provident a ratione excepturi obcaecati fugit quas, rerum cupiditate!"
        },
        {
            id: 5,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus iste, esse molestias alias eos animi dignissimos porro reprehenderit accusantium tempora inventore itaque ipsum? Commodi in blanditiis atque fugit praesentium molestiae inventore quis tempore. Illo omnis quibusdam rerum iste neque magnam molestias cumque, sint, necessitatibus consequuntur tenetur, laboriosam consectetur obcaecati unde libero dicta blanditiis! Voluptates natus officiis maxime adipisci repellat assumenda cumque iure totam fugiat delectus culpa, ullam unde perspiciatis asperiores nobis itaque modi corrupti ipsam, inventore tenetur reiciendis ratione doloremque quam? Tenetur fugit provident sit enim dolor nemo autem delectus. Provident a ratione excepturi obcaecati fugit quas, rerum cupiditate!"
        },
        {
            id: 6,
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus iste, esse molestias alias eos animi dignissimos porro reprehenderit accusantium tempora inventore itaque ipsum? Commodi in blanditiis atque fugit praesentium molestiae inventore quis tempore. Illo omnis quibusdam rerum iste neque magnam molestias cumque, sint, necessitatibus consequuntur tenetur, laboriosam consectetur obcaecati unde libero dicta blanditiis! Voluptates natus officiis maxime adipisci repellat assumenda cumque iure totam fugiat delectus culpa, ullam unde perspiciatis asperiores nobis itaque modi corrupti ipsam, inventore tenetur reiciendis ratione doloremque quam? Tenetur fugit provident sit enim dolor nemo autem delectus. Provident a ratione excepturi obcaecati fugit quas, rerum cupiditate!"
        },
    ];

    return (
        <div className="flex flex-col gap-4 h-full overflow-x-auto px-8 pt-4">
            {messages.map((singleMessage) => (
                <div
                    key={singleMessage.id}
                    className={cn(
                        "flex items-start gap-4",
                        { "justify-end flex-row-reverse ml-auto": singleMessage.id % 2 === 0 },
                        { "justify-start": singleMessage.id % 2 !== 0 }
                    )}
                >
                    <Image src={vercel} width={24} height={24} alt="icon" className="relative top-2"/>
                    <p
                        className={cn("p-3 px-5 rounded-md text-primary-foreground max-w-[800px]",
                            { "bg-wine": singleMessage.id % 2 === 0 },
                            { "bg-[#d1c7bd] text-wine": singleMessage.id % 2 !== 0 }
                        )}>{singleMessage.message}</p>
                </div>
            ))}
        </div>
    );

};

export default MessageSection;
