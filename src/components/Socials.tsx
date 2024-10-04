import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

interface SocialsProps {
    containerStyles: string;
    iconStyles: string;
}

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/altugaltuner"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/altug-altuner/"
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/altugaltuner/"
    },
]

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item) => {
                return (
                    <Link href={item.path} key={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    )
}

export default Socials