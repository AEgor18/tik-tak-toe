import clsx from "clsx";
import avatarSrc from "./avatar.png";
import Image from 'next/image';

export function Profile ({className}) {
    return (
        <div className={clsx(className, "flex items-center gap-2 text-start text-teal-600")}>
            <Image src={avatarSrc} alt="avatar" unoptimized className="w-12 h-12"/>
            <div>
                <div className=" text-lg leading-tight">User</div>
                <div className="text-slate-400 text-xs leading-tight">Рейтинг: 1230</div>
            </div>
        </div>
    )
}