import Link from "next/link";

export default function StudentInfo(){
    const linkStyles = "underline text-cyan-600 hover:text-cyan-300";
    return(
        <div>
            <p>Caylyn MacDougall</p>
            <p>
            <Link className={linkStyles} href="https://github.com/caylynmac/cprg306-assignments">Github</Link>
            </p>
        </div>
    );
}