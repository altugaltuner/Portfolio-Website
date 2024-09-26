import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';

interface SocialsProps {
    containerStyles: string;
    iconStyles: string;
}

const socials = [
    {
        icon: <FaGithub />,
        path: ""
    },
    {
        icon: <FaLinkedinIn />,
        path: ""
    },
    {
        icon: <FaYoutube />,
        path: ""
    },
    {
        icon: <FaTwitter />,
        path: ""
    },
]

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    )
}

export default Socials