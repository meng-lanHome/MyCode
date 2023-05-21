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

async function FileList(owner, repo, path) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(
            `Failed to retrieve file list (${response.status} ${response.statusText})`
        );
    }
    const data = await response.json();
    console.log(url)
    return data;
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
    const ListContainer=document.createElement('ul');
    let count=1;
    data.forEach((file)=>{
        const listItem=` 
            <li class="file">
                <div class="count">${count}</div>
                <div>
                    <a href="${file.path.replace(/\.md$/, ".html")}" class="href">
                        ${file.name.replace(/\.md$/, "")}
                    </a>
                </div>
                <div>
                    <p>size: ${(file.size/1024).toFixed(2)}kb</p>
                </div>
                <div>
                    <p>type: ${file.type}</p>
                </div>
            </li>
        `;
        ListContainer.innerHTML+=listItem;

        count++;
    });
    console.log(ListContainer)
    return ListContainer
}

showFile("Data/db/date.json");

