const div=document.getElementsByClassName("md-file");
async function FileJson(owner,repo,path){
    const url=`https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const response=await fetch(url);
    if (!response.ok){
        throw new Error(
            `Failed to retrieve file list (${response.status} ${response.statusText})`
        );
    }
    const data = await response.json();
    return data;
}
async function showFileList(owner, repo, path){
    try {
        const data = await FileJson(owner, repo, path);
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
function BuoldFile(data) {
    data.forEach((file)=>{

    });
}
// showFileList("meng-lanhome", "meng-lanhome.github.io", "docs");
