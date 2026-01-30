import style from '@layout/Home/StyleHome.module.css'

// => Ícones de Tecnologias
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiTypescript, SiVite, SiTailwindcss, SiGit, SiPhp
} from "react-icons/si";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

// vscode


const techIcon = [
    { name: "HTML5", iconComponent: SiHtml5, color: "#E34F26" },
    { name: "CSS3", iconComponent: SiCss3, color: "#1572B6" },
    { name: "JavaScript", iconComponent: SiJavascript, color: "#F7DF1E" },
    { name: "React", iconComponent: SiReact, color: "#61DAFB" },
    { name: "TypeScript", iconComponent: SiTypescript, color: "#3178C6" },
    { name: "Vite", iconComponent: SiVite, color: "#646CFF" },
    { name: "Bootstrap", iconComponent: FaBootstrap, color: "#7952B3" },
    { name: "Tailwind", iconComponent: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", iconComponent: FaNodeJs, color: "#339933" },
    { name: "PHP", iconComponent: SiPhp, color: "#1572B6" },
    { name: "Git", iconComponent: SiGit, color: "#F05032" },
    { name: "MySQL", iconComponent: GrMysql, color: "#00758F" },
]


export default function IconsTech() {
    return(
        <>
            <div className={style.icon_container}>
                {techIcon.map((tech, index) => {
                    const Icon = tech.iconComponent
                    return(
                        <Icon key={index} title={tech.name} className={style.icon_tech} size={70}
                        color={tech.color ? tech.color : undefined} />
                    )
                })}
            </div>
        </>
    )
}



