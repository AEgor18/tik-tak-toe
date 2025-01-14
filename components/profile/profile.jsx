import clsx from "clsx";
import avatarSrc from "./avatar.png";
import Image from 'next/image';

export function Profile ({className, name, rating, avatar = avatarSrc}) {
    return (
        <div className={clsx(className, "flex items-center gap-2 text-start text-teal-600")}>
            <Image src={avatar} alt="avatar" unoptimized className="w-12 h-12"/>
            <div className="overflow-hidden">
                <div className=" text-lg leading-tight truncate">{name}</div>
                <div className="text-slate-400 text-xs leading-tight">Рейтинг: {rating}</div>
            </div>
        </div>
    )
}