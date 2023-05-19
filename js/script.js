async function fetchFileList(owner, repo, path) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(
            `Failed to retrieve file list (${response.status} ${response.statusText})`
        );
    }
    const data = await response.json();
    return data;
}

function buildFileList(data) {
    const fileList = [];
    data.forEach((file) => {
        const listItem = `
      <div>
        <a href="${file.path.replace(/\.md$/, ".html")}">
          ${file.name.replace(/\.md$/, "")}
        </a>
      </div>`;
        fileList.push(listItem);
    });
    const fileListContainer = document.createElement("ul");
    fileListContainer.innerHTML = fileList.join("");
    return fileListContainer;
}

async function showFileList(owner, repo, path) {
    try {
        const data = await fetchFileList(owner, repo, path);
        const fileListContainer = buildFileList(data);
        document.getElementById("file-list").appendChild(fileListContainer);
    } catch (error) {
        console.error(error);
    }
}
showFileList("meng-lanhome", "meng-lanhome.github.io", "docs");