async function getFileJson(path) {
    try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error(`Unable to load JSON file from ${path}`);
    }
}
async function showFile(path) {
    try {
        const data = await getFileJson(path);
        const container= buildFileContainer(data);
        document.getElementById('container').appendChild(container)
    } catch (error) {
        console.error(error);
    }
}
function buildFileContainer(data) {
    const ListContainer=document.createElement('div');
    let count=1;
    data.forEach((file)=>{
        const listItem=` 
            <div class="file${count}">
                <a>${count}</a>      
                <a href="${file.path.replace(/\.md$/, ".html")}">
                    ${file.name.replace(/\.md$/, "")}
                </a>
                <a>${(file.size/1024).toFixed(2)}</a><span>kb</span>
                <a>${file.type}</a>
            </div>
        `;
        ListContainer.innerHTML+=listItem;
        count++;
    });
    return ListContainer
}
showFile('Data/db/date.json');