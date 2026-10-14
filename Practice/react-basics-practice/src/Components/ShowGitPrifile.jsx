import useGitinfo from "../hook/useGitinfo"

export function  ShowGitPrifile(){
    const  gitData=useGitinfo()
    return(
        <>
            <h1>{gitData}</h1>
        </>
    )
}